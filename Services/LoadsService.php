<?php
namespace Modules\Brookr\Services;

use Exception;
use Carbon\Carbon;
use Twilio\Rest\Client;
use App\Jobs\SMSDriverJob;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Tendoo\Core\Services\Options;
use Modules\Brookr\Models\Company;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Tendoo\Core\Services\DateService;
use Illuminate\Support\Facades\Storage;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Mails\OngoingLoadMail;
use Modules\Brookr\Mails\AssignedLoadMail;
use Modules\Brookr\Mails\DeliveryCompletedMail;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Mails\DeliveredLoadMail;
use Modules\Brookr\Mails\UnassignedLoadMail;
use Modules\Brookr\Events\AfterEditLoadEvent;
use Modules\Brookr\Events\BeforeEditLoadEvent;
use Modules\Brookr\Models\LoadDeliveryHistory;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\AfterDeleteLoadEvent;
use Modules\Brookr\Events\BeforeCreateLoadEvent;
use Modules\Brookr\Events\BeforeDeleteLoadEvent;

class LoadsService
{
    protected $trucksService;
    protected $optionService;
    protected $driversService;

    public function __construct(
        TrucksService $trucksService,
        DriversService $driversService,
        Options $optionService,
        DateService $dateService
    ) {
        $this->trucksService    =   $trucksService;
        $this->optionService    =   $optionService;
        $this->driversService   =   $driversService;
        $this->date             =   $dateService;
    }
    
    public function create( $fields )
    {
        $hasDispatchedFirstEvent    =   false;

        try {
            $driver     =   $this->driversService->get( $fields[ 'drivers' ][ 'driver_id' ] );
            $truck      =   $this->trucksService->getTruck( $fields[ 'drivers' ][ 'truck_id' ] );
        } catch( Exception $e ) {}

        event( new BeforeCreateLoadEvent( $driver ?? null, $truck ?? null, $fields ) );
        
        $load                       =   new LoadDelivery;
        $load->name                 =   $fields[ 'main' ][ 'name' ] ?? '';
        $load->brooker_id           =   $fields[ 'general' ][ 'brooker_id' ];
        $load->load_reference       =   $fields[ 'general' ][ 'load_reference' ];
        $load->trailer_reference    =   $fields[ 'general' ][ 'trailer_reference' ];
        $load->pickup_reference     =   $fields[ 'general' ][ 'pickup_reference' ];
        $load->status               =   $fields[ 'general' ][ 'status' ] ?? $this->optionService->get( 'brookr_system_unassigned_status', 'pending' );
        $load->pickup_date          =   Carbon::parse( $fields[ 'general' ][ 'pickup_date' ] )->toDateTimeString();
        $load->pickup_city          =   $fields[ 'general' ][ 'pickup_city' ];
        $load->delivery_date        =   Carbon::parse( $fields[ 'general' ][ 'delivery_date' ] )->toDateTimeString();
        $load->delivery_city        =   $fields[ 'general' ][ 'delivery_city' ];
        $load->empty_trailer        =   $fields[ 'general' ][ 'empty_trailer' ] ?? '';
        $load->drop_trailer         =   $fields[ 'general' ][ 'drop_trailer' ] ?? '';
        $load->load_trailer         =   $fields[ 'general' ][ 'load_trailer' ] ?? '';
        $load->note                 =   $fields[ 'general' ][ 'note' ] ?? '';
        $load->visible              =   empty( $fields[ 'general' ][ 'visible' ] ) || $fields[ 'general' ][ 'visible' ] === 'false' ? false : true;
        $load->user_id              =   Auth::id();
        $load->driver_id            =   ! empty( $fields[ 'drivers' ][ 'driver_id' ] ) && $fields[ 'drivers' ][ 'driver_id' ] !== 'null' ? $fields[ 'drivers' ][ 'driver_id' ] : null;
        $load->truck_id             =   ! empty( $fields[ 'drivers' ][ 'truck_id' ] ) && $fields[ 'drivers' ][ 'truck_id' ] !== 'null' ? $fields[ 'drivers' ][ 'truck_id' ] : null;
        $load->cost                 =   $fields[ 'general' ][ 'cost' ] ?? 0;
        $load->save();
        
        $this->handleLoadFileUpload( $fields, $load );
        

        /**
         * let's define a name automatically
         * if it's hasn't been provided
         */
        $load->name                 =   $fields[ 'main' ][ 'name' ] ?? $this->getLoadGeneratedName( $load );
        $load->save();

        event( new AfterCreateLoadEvent( $load, $driver ?? null, $truck ?? null ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load has been created' ),
            'data'      =>  compact( 'load' )
        ];
    }

    private function handleLoadFileUpload( $fields, LoadDelivery $load )
    {
        /**
         * the upload fields are on general
         */
        foreach( $fields[ 'general' ] as $key => $value ) {
            if ( in_array( $key, [ 'rate_document_url', 'delivery_document_url' ] ) && ! empty( $value ) && $value !== 'null' ) {
                $relativeFilePath   =   'brookr-uploads/loads/' . $load->id . '-' . $key . '-' . Str::slug( $load->updated_at ) . '.' . request()->file( 'general--' . $key )->extension();
                
                Storage::disk( 'public' )->delete( $relativeFilePath );

                $newRelativePath    =   'brookr-uploads/loads/' . $load->id . '-' . $key . '-' . Str::slug( $load->updated_at ) . '.' . request()->file( 'general--' . $key )->extension();
                $url                =   request()->file( 'general--' . $key )->storeAs(
                    'public', $relativeFilePath
                );
                
                $load->$key         =   Storage::disk( 'public' )->url( $newRelativePath );
                $load->save();
            }
        }
    }

    private function saveBase64( $data, $directory )
    {
        $imageParts     =   explode( ";base64,", $data );
        $imageTypeAux   =   explode( "image/", $imageParts[0] );
        $imageType      =   $imageTypeAux[1];
        $imageBase64    =   base64_decode( $imageParts[1] );
        $fileFullPath   =   $directory . '.' . $imageType;

        if ( Storage::disk( 'public' )->exists( $fileFullPath ) ) {
            Storage::disk( 'public' )->delete( $directory . '.' . $imageType );
        }

        Storage::disk( 'public' )->put( $directory . '.' . $imageType, $imageBase64 );
    }

    private function getLoadGeneratedName( LoadDelivery $load )
    {
        $loadTitle      =   $this->optionService->get( 'brookr_loads_title', 'Load Delivery {id}' );
        $loadTitle      =   str_replace( '{id}', sprintf( '%04d', $load->id ), $loadTitle );
        $loadTitle      =   str_replace( '{date}', Carbon::now()->format( 'Y-m-d' ), $loadTitle );
        return $loadTitle;
    }

    public function edit( $id, $fields )
    {
        $load       =   LoadDelivery::find( $id );
        $truck      =   $load->truck;
        $driver     =   $load->driver;
        
        event( new BeforeEditLoadEvent( $load, $driver, $truck, ( array ) @$fields[ 'drivers' ] ) );

        $load->name                 =   $fields[ 'main' ][ 'name' ] ?? $this->getLoadGeneratedName( $load );
        $load->brooker_id           =   $fields[ 'general' ][ 'brooker_id' ];
        $load->load_reference       =   $fields[ 'general' ][ 'load_reference' ];
        $load->status               =   $fields[ 'general' ][ 'status' ] ?? 'pending';
        $load->trailer_reference    =   $fields[ 'general' ][ 'trailer_reference' ];
        $load->pickup_reference     =   $fields[ 'general' ][ 'pickup_reference' ];
        $load->pickup_date          =   Carbon::parse( $fields[ 'general' ][ 'pickup_date' ] )->toDateTimeString();
        $load->pickup_city          =   $fields[ 'general' ][ 'pickup_city' ];
        $load->delivery_date        =   Carbon::parse( $fields[ 'general' ][ 'delivery_date' ] )->toDateTimeString();
        $load->delivery_city        =   $fields[ 'general' ][ 'delivery_city' ];
        $load->lumper_fees          =   $fields[ 'drivers' ][ 'lumper_fees' ] ?? 0;
        $load->escort_fees          =   $fields[ 'drivers' ][ 'escort_fees' ] ?? 0;
        $load->detention_fees       =   $fields[ 'drivers' ][ 'detention_fees' ] ?? 0;
        $load->empty_trailer        =   $fields[ 'general' ][ 'empty_trailer' ] ?? '';
        $load->drop_trailer         =   $fields[ 'general' ][ 'drop_trailer' ] ?? '';
        $load->load_trailer         =   $fields[ 'general' ][ 'load_trailer' ] ?? '';
        $load->note                 =   $fields[ 'general' ][ 'note' ] ?? '';
        $load->visible              =   empty( $fields[ 'general' ][ 'visible' ] ) || $fields[ 'general' ][ 'visible' ] === 'false' ? false : true;
        $load->user_id              =   Auth::id();
        
        $load->truck_id             =   @$fields[ 'drivers' ][ 'truck_id' ] ?? null;
        $load->driver_id            =   @$fields[ 'drivers' ][ 'driver_id' ] ?? null;
        $load->cost                 =   $fields[ 'general' ][ 'cost' ] ?? 0;
        
        $load->save();

        $this->handleLoadFileUpload( $fields, $load );

        event( new AfterEditLoadEvent( $load, $driver, $truck ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load has been edited' ),
            'data'      =>  compact( 'load' )
        ];
    }

    public function handleCanEditLoad( BeforeEditLoadEvent $event )
    {
        if ( $event->load->status === 'delivered' ) {
            throw new Exception( __( 'Cannot edit a load which has already been delivered.' ) );
        }
    }

    public function deleteLoad( $id )
    {
        if ( $id instanceof LoadDelivery ) {
            $load       =   $id;
            $load_id    =   $load->id;
        } else {
            $load       =   $this->get( $id );
            $load_id    =   $load->id;
        }


        event( new BeforeDeleteLoadEvent( $load, $load->driver, $load->truck ) );

        $load->delete();

        event( new AfterDeleteLoadEvent( $load_id ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load has been successfully deleted.' )
        ];
    }

    public function get( $id )
    {
        return LoadDelivery::findOrFail( $id );
    }

    public function updateLoadAssignation( $id, $fields )
    {
        $load       =   $this->get( $id );
        $driver     =   ! empty( $load->driver_id ) ? $this->driversService->get( $load->driver_id ) : null;
        $truck      =   ! empty( $load->truck_id ) ? $this->trucksService->get( $load->truck_id ) : null;

        event( new BeforeEditLoadEvent( 
            $load, 
            $driver,
            $truck,
            $fields
        ) );

        foreach([
            'truck_id',
            'driver_id',
        ] as $field ) {
            $load->$field   =   $fields[ $field ] ?: '';
        }

        foreach([
            'cost',
            'escort_fees',
            'lumper_fees',
            'detention_fees'
        ] as $field ) {
            $load->$field   =   $fields[ $field ] ?: 0;
        }

        $load->save();

        $driver     =   ! empty( $load->driver_id ) ? $this->driversService->get( $load->driver_id ) : null;
        $truck      =   ! empty( $load->truck_id ) ? $this->trucksService->get( $load->truck_id ) : null;

        event( new AfterEditLoadEvent( $load, $driver, $truck ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load has been successfully edited.' )
        ];
    }

    public function updateLoadStatus( $id, $fields )
    {
        $load           =   $this->get( $id );

        foreach( $fields as $key => $value ) {
            $load->$key   =   $fields[ $key ];
        }

        $load->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load status has been changed.' )
        ];
    }

    public function getUnassigned( $total = 10, $order = 'asc' )
    {
        return LoadDelivery::where( 'status', 'pending' )->orderBy( 'created_at', $order )
            ->limit( $total )
            ->get();
    }

    public function selfAssignDriver( $load_id, $fields )
    {
        $driver_id          =   $fields[ 'load' ][ 'driver_id' ];
        $truck_id           =   $fields[ 'load' ][ 'truck_id' ];
        $load               =   $this->get( $load_id );
        $driver             =   Driver::find( $driver_id );
        $fields             =   [
            'driver_id'     =>  $driver->id,
            'truck_id'      =>  $truck_id,
            'load_id'       =>  $load_id
        ];
        $truck              =   Truck::findOrFail( $truck_id );

        event( new BeforeEditLoadEvent( $load, $driver, $truck, $fields ) );
        
        $load->driver_id    =   $driver_id;
        $load->truck_id     =   $truck->id;
        $load->visible      =   false;
        $load->save();

        event( new AfterEditLoadEvent( $load, $driver, $truck ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'You have been successfully assigned to this delivery.' )
        ];
    }

    public function awaitingLoadDelivery( $id )
    {
        $load                   =   $this->get( $id );
        $load->status           =   $this->optionService->get( 'brookr_system_awaiting_status', 'awaiting' );
        $load->save();

        $action                 =   new LoadDeliveryHistory;
        $action->action_time    =   $this->date->now()->toDateTimeString();
        $action->action_type    =   'brookr.awaiting-load';
        $action->user_id        =   Auth::id();
        $action->load_id        =   $load->id;
        $action->save();

        event( new AfterEditLoadEvent( $load, $load->driver, $load->truck ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The delivery status has changed to awaiting load.' )
        ];
    }

    public function startDelivery( $id, $fields )
    {
        $load                   =   $this->get( $id );

        foreach( $fields[ 'load' ] as $field => $value ) {
            $load->$field   =   $value;
        }

        if ( $load->status === $this->optionService->get( 'brookr_system_handling_status', 'ongoing' ) ) {
            throw new Exception( __( 'Unable to change the status of the load is has already started' ) );
        }

        $load->status           =   $this->optionService->get( 'brookr_system_handling_status', 'ongoing' );
        $load->save();

        $action                 =   new LoadDeliveryHistory;
        $action->action_time    =   $this->date->now()->toDateTimeString();
        $action->action_type    =   'brookr.start-delivery';
        $action->user_id        =   Auth::id();
        $action->load_id        =   $load->id;
        $action->save();

        event( new AfterEditLoadEvent( $load, $load->driver, $load->truck ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The delivery has successfully started.' )
        ];
    }

    public function stopDelivery( $id, Request $request )
    {
        $load               =   $this->get( $id );
        $deliveredStatus    =   $this->optionService->get( 'brookr_system_delivered_status', 'delivered' );
        $ongoingStatus      =   $this->optionService->get( 'brookr_system_handling_status', 'ongoing' );

        if ( $load->status !== $ongoingStatus ) {
            throw new Exception( __( 'Cannot change the status of this delivery as it has never been handled.' ) );
        }
        
        $filePath                       =   'brookr-uploads';
        $extension                      =   $request->file('delivery_document_url')->extension();
        $path                           =   Storage::disk( 'public' )->putFileAs( 
            $filePath, 
            $request->file( 'delivery_document_url' ), 
            'loads/' . $load->id . '-delivery_document_url.' . $extension 
        );

        $load->delivery_document_url    =   asset( 'storage/' . $path );
        $load->empty_trailer            =   $request->input( 'empty_trailer' );
        $load->status                   =   $deliveredStatus;
        $load->save();

        /**
         * Saving the delivery history
         */
        $deliveryHistory                =   new LoadDeliveryHistory;
        $deliveryHistory->action_type   =   'brookr.shipper_arrival_time';
        $deliveryHistory->action_value  =   $request->input( 'shipper_arrival_time' );
        $deliveryHistory->load_id       =   $load->id;
        $deliveryHistory->user_id       =   Auth::id();
        $deliveryHistory->action_time   =   $this->date->now()->toDateTimeString();
        $deliveryHistory->save();
        
        /**
         * Saving the delivery history
         */
        $deliveryHistory                =   new LoadDeliveryHistory;
        $deliveryHistory->action_type   =   'brookr.receiver_arrival_time';
        $deliveryHistory->action_value  =   $request->input( 'receiver_arrival_time' );
        $deliveryHistory->load_id       =   $load->id;
        $deliveryHistory->user_id       =   Auth::id();
        $deliveryHistory->action_time   =   $this->date->now()->toDateTimeString();
        $deliveryHistory->save();

        /**
         * Saving the delivery history
         */
        $deliveryHistory                =   new LoadDeliveryHistory;
        $deliveryHistory->action_type   =   'brookr.depart_time';
        $deliveryHistory->action_value  =   $request->input( 'depart_time' );
        $deliveryHistory->load_id       =   $load->id;
        $deliveryHistory->user_id       =   Auth::id();
        $deliveryHistory->action_time   =   $this->date->now()->toDateTimeString();
        $deliveryHistory->save();


        event( new AfterEditLoadEvent( $load, $load->driver, $load->truck ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The delivery document has been successfully recorded.' )
        ];
    }

    public function reportDrivers( AfterCreateLoadEvent $event )
    {
        if ( $event->load->driver_id !== null ) {
            Mail::to( $event->load->driver->email )
                ->queue( new AssignedLoadMail( $event->load ) );
        } else if ( $event->load->driver_id === null && $event->load->visible ) {
            Role::namespace( 'brookr.driver' )->user->each( function( $user ) use ( $event ) {
                Mail::to( $user->email )
                    ->queue( new UnassignedLoadMail( $event->load ) );
            });
        }
    }

    public function notifyAdministrator( AfterEditLoadEvent $event )
    {
        $options    =   app()->make( Options::class );

        if ( $event->load->status === $options->get( 'brookr_system_handling_status', 'ongoing' ) ) {
            Role::namespace( 'brookr.dispatcher' )->user->each( function( $user ) use ( $event ) {
                Mail::to( $user->email )
                    ->queue( new OngoingLoadMail( $event->load ) );
            });
        }

        if ( $event->load->status === $options->get( 'brookr_system_delivered_status', 'delivered' ) ) {
            Role::namespace( 'brookr.dispatcher' )->user->each( function( $user ) use ( $event ) {
                Mail::to( $user->email )
                    ->queue( new DeliveredLoadMail( $event->load ) );
            });
        }
    }

    public function notifyAction( string $namespace, LoadDelivery $load )
    {
        switch( $namespace ) {
            case 'delivery':
                return $this->notifyDelivery( $load );
            break;
        }
    }

    public function notifyDelivery( LoadDelivery $load )
    {
        $company_id     =   $this->optionService->get( 'brookr_mail_notified_company_id' );
        
        if ( ! empty( $company_id ) ) {
            $company    =   Company::find( $company_id );

            if ( $company instanceof Company ) {
                $mail   =   Mail::to( $company->email );

                Role::namespace( 'brookr.dispatcher' )->user->each( function( $user ) use ( $mail ) {
                    $mail->cc( $user->email );
                });

                $mail->queue( new DeliveryCompletedMail( $load ) );

                return [
                    'status'    =>  'success',
                    'message'   =>  __( 'The delivery notification has been successfully sent.' )
                ];
            }
        }

        throw new Exception( __( 'No company is assigned to receive the notification on the settings.' ) );
    }

    public function handleSmsDriverIfNecessary( $event )
    {
        if ( $event->load->driver_id !== null ) {
            $load               =   $event->load;
            if ( $event->driver->details->sms_notifications ) {
                SMSDriverJob::dispatch( $event )->delay( now()->addSeconds(2) );
            }
        }
    }

    public function getHistory( LoadDelivery $load )
    {
        return $load->history->map( function( $history ) {
            $dateFormat                 =   $this->optionService->get( 'brookr_system_datetime_format', 'D d, M y H:m' );
            $history->action_time       =   Carbon::parse( $history->action_time )->format( $dateFormat );
            return $history;
        });
    }

    public function unassignDriver( LoadDelivery $load )
    {
        $deliveredStatus    =   $this->optionService->get( 'brookr_system_delivered_status', 'delivered' );

        if ( $load->status === $deliveredStatus ) {
            throw new Exception( __( 'Cannot unassign driver on delivered load.' ) );
        }
        
        if ( empty( $load->driver_id ) ) {
            throw new Exception( __( 'No driver is assigned to this load.' ) );
        }

        $load->driver_id    =   null;
        $load->visible      =   1;
        $load->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The driver has been unassigned from this load.' )
        ];
    }
}