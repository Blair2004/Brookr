<?php
namespace Modules\Brookr\Services;

use Exception;
use Carbon\Carbon;
use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Services\DateService;
use Illuminate\Support\Facades\Storage;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Services\TrucksService;
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
        $load->status               =   $fields[ 'general' ][ 'status' ];
        $load->pickup_date          =   Carbon::createFromFormat( 'Y-m-d\TH:i:s\.\0\0\0\Z', $fields[ 'general' ][ 'pickup_date' ] )->toDateTimeString();
        $load->pickup_city          =   $fields[ 'general' ][ 'pickup_city' ];
        $load->delivery_date        =   Carbon::createFromFormat( 'Y-m-d\TH:i:s\.\0\0\0\Z', $fields[ 'general' ][ 'delivery_date' ] )->toDateTimeString();
        $load->delivery_city        =   $fields[ 'general' ][ 'delivery_city' ];
        $load->empty_trailer        =   $fields[ 'general' ][ 'empty_trailer' ] ?? '';
        $load->drop_trailer         =   $fields[ 'general' ][ 'drop_trailer' ] ?? '';
        $load->visible              =   $fields[ 'general' ][ 'visible' ] ?? '';
        $load->user_id              =   Auth::id();
        $load->driver_id            =   $fields[ 'drivers' ][ 'driver_id' ];
        $load->truck_id             =   $fields[ 'drivers' ][ 'truck_id' ];
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
            if ( in_array( $key, [ 'rate_document_url', 'delivery_document_url' ] ) && ! empty( $value ) ) {
                $this->saveBase64( $value, 'brookr-uploads/' . $load->id . '-' . $key );
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
        
        event( new BeforeEditLoadEvent( $load, $driver, $truck, $fields[ 'drivers' ] ) );

        $load->name                 =   $fields[ 'main' ][ 'name' ] ?? $this->getLoadGeneratedName( $load );
        $load->brooker_id           =   $fields[ 'general' ][ 'brooker_id' ];
        $load->load_reference       =   $fields[ 'general' ][ 'load_reference' ];
        $load->status               =   $fields[ 'general' ][ 'status' ] ?? 'pending';
        $load->trailer_reference    =   $fields[ 'general' ][ 'trailer_reference' ];
        $load->pickup_reference     =   $fields[ 'general' ][ 'pickup_reference' ];
        $load->pickup_date          =   Carbon::createFromFormat( 'Y-m-d\TH:i:s\.\0\0\0\Z', $fields[ 'general' ][ 'pickup_date' ] )->toDateTimeString();
        $load->pickup_city          =   $fields[ 'general' ][ 'pickup_city' ];
        $load->delivery_date        =   Carbon::createFromFormat( 'Y-m-d\TH:i:s\.\0\0\0\Z', $fields[ 'general' ][ 'delivery_date' ] )->toDateTimeString();
        $load->delivery_city        =   $fields[ 'general' ][ 'delivery_city' ];
        $load->lumper_fees          =   $fields[ 'drivers' ][ 'lumper_fees' ] ?? 0;
        $load->escort_fees          =   $fields[ 'drivers' ][ 'escort_fees' ] ?? 0;
        $load->empty_trailer        =   $fields[ 'general' ][ 'empty_trailer' ] ?? '';
        $load->drop_trailer         =   $fields[ 'general' ][ 'drop_trailer' ] ?? '';
        $load->visible              =   $fields[ 'general' ][ 'visible' ] ?? '';
        $load->user_id              =   Auth::id();
        
        $load->truck_id             =   $fields[ 'drivers' ][ 'truck_id' ];
        $load->driver_id            =   $fields[ 'drivers' ][ 'driver_id' ];
        $load->cost                 =   $fields[ 'general' ][ 'cost' ] ?? 0;
        
        $load->save();

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
            'cost',
            'escort_fees',
            'lumper_fees',
        ] as $field ) {
            if ( ! empty( $fields[ $field ] ) ) {
                $load->$field   =   $fields[ $field ];
            }
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

    public function startDelivery( $id )
    {
        $load                   =   $this->get( $id );
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
}