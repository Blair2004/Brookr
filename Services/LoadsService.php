<?php
namespace Modules\Brookr\Services;

use Exception;
use Tendoo\Core\Models\User;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Events\LoadDispatchedEvent;

class LoadsService
{
    public function __construct(
        TrucksService $trucksService 
    ) {
        $this->trucksService    =   $trucksService;
    }
    
    public function create( $fields )
    {
        $driver     =   User::find( $fields[ 'drivers' ][ 'driver_id' ] )->first();

        if ( ! ( bool ) $driver->brookr_driver_available ) {
            throw new Exception( __( 'Unable to assign this driver, he\'s already busy.' ) );
        }

        $truck      =   $this->trucksService->getTruck( $fields[ 'drivers' ][ 'truck_id' ] );
        if ( ! $truck->status !== 'available' ) {
            throw new Exception( __( 'Unable to use this truck as it\'s not available.' ) );
        }

        $load                       =   new LoadDelivery;
        $load->name                 =   $fields[ 'main' ][ 'name' ];
        $load->brooker_id           =   $fields[ 'general' ][ 'brookr_id' ];
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

        event( new LoadDispatchedEvent( $load ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load has been created' ),
            'data'      =>  compact( 'load' )
        ];
    }
}