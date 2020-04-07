<?php
namespace Modules\Brookr\Services;

use Exception;
use Carbon\Carbon;
use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Driver;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Events\AfterEditLoadEvent;
use Modules\Brookr\Events\BeforeEditLoadEvent;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\BeforeCreateLoadEvent;
use Modules\Brookr\Events\BeforeDeleteLoadEvent;

class LoadsService
{
    protected $trucksService;
    protected $optionService;

    public function __construct(
        TrucksService $trucksService,
        Options $optionService
    ) {
        $this->trucksService    =   $trucksService;
        $this->optionService    =   $optionService;
    }
    
    public function create( $fields )
    {
        $driver     =   Driver::findOrFail( $fields[ 'drivers' ][ 'driver_id' ] );
        $truck      =   $this->trucksService->getTruck( $fields[ 'drivers' ][ 'truck_id' ] );

        event( new BeforeCreateLoadEvent( $driver, $truck, $fields ) );

        $load                       =   new LoadDelivery;
        $load->name                 =   $fields[ 'main' ][ 'name' ] ?? '';
        $load->brooker_id           =   $fields[ 'general' ][ 'brooker_id' ];
        $load->load_reference       =   $fields[ 'general' ][ 'load_reference' ];
        $load->trailer_reference    =   $fields[ 'general' ][ 'trailer_reference' ];
        $load->pickup_reference     =   $fields[ 'general' ][ 'pickup_reference' ];
        $load->truck_id             =   $fields[ 'drivers' ][ 'truck_id' ];
        $load->driver_id            =   $fields[ 'drivers' ][ 'driver_id' ];
        $load->cost                 =   $fields[ 'drivers' ][ 'cost' ];
        $load->pickup_date          =   $fields[ 'pickup_delivery' ][ 'pickup_date' ];
        $load->pickup_city          =   $fields[ 'pickup_delivery' ][ 'pickup_city' ];
        $load->delivery_date        =   $fields[ 'pickup_delivery' ][ 'delivery_date' ];
        $load->delivery_city        =   $fields[ 'pickup_delivery' ][ 'delivery_city' ];
        $load->status               =   'pending';
        $load->user_id              =   Auth::id();
        $load->save();

        /**
         * let's define a name automatically
         * if it's hasn't been provided
         */
        $load->name                 =   $fields[ 'main' ][ 'name' ] ?? $this->getLoadGeneratedName( $load );
        $load->save();

        event( new AfterCreateLoadEvent( $load, $driver, $truck ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load has been created' ),
            'data'      =>  compact( 'load' )
        ];
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

        event( new BeforeEditLoadEvent( $load, $driver, $truck, $fields ) );

        $load->name                 =   $fields[ 'main' ][ 'name' ] ?? $this->getLoadGeneratedName( $load );
        $load->brooker_id           =   $fields[ 'general' ][ 'brooker_id' ];
        $load->load_reference       =   $fields[ 'general' ][ 'load_reference' ];
        $load->trailer_reference    =   $fields[ 'general' ][ 'trailer_reference' ];
        $load->pickup_reference     =   $fields[ 'general' ][ 'pickup_reference' ];
        $load->truck_id             =   $fields[ 'drivers' ][ 'truck_id' ];
        $load->driver_id            =   $fields[ 'drivers' ][ 'driver_id' ];
        $load->cost                 =   $fields[ 'drivers' ][ 'cost' ];
        $load->pickup_date          =   $fields[ 'pickup_delivery' ][ 'pickup_date' ];
        $load->pickup_city          =   $fields[ 'pickup_delivery' ][ 'pickup_city' ];
        $load->delivery_date        =   $fields[ 'pickup_delivery' ][ 'delivery_date' ];
        $load->delivery_city        =   $fields[ 'pickup_delivery' ][ 'delivery_city' ];
        $load->status               =   'pending';
        $load->user_id              =   Auth::id();
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
        $load   =   $this->get( $id );

        event( new BeforeDeleteLoadEvent( $load, $load->driver, $load->truck ) );

        $load->delete();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load has been successfully deleted.' )
        ];
    }

    public function get( $id )
    {
        return LoadDelivery::findOrFail( $id );
    }
}