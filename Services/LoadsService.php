<?php
namespace Modules\Brookr\Services;

use Exception;
use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Driver;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\BeforeCreateLoadEvent;

class LoadsService
{
    public function __construct(
        TrucksService $trucksService 
    ) {
        $this->trucksService    =   $trucksService;
    }
    
    public function create( $fields )
    {
        $driver     =   Driver::findOrFail( $fields[ 'drivers' ][ 'driver_id' ] );
        $truck      =   $this->trucksService->getTruck( $fields[ 'drivers' ][ 'truck_id' ] );

        event( new BeforeCreateLoadEvent( $driver, $truck, $fields ) );

        $load                       =   new LoadDelivery;
        $load->name                 =   $fields[ 'main' ][ 'name' ];
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
        $load->name                 =   $fields[ 'main' ][ 'name' ] ?? __( 'Load Delivery -' . sprintf( '%04d', $load->id ) . '-' . Carbon::now()->format( 'Y-m-d' ) );
        $load->save();

        event( new AfterCreateLoadEvent( $load, $driver, $truck ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The load has been created' ),
            'data'      =>  compact( 'load' )
        ];
    }
}