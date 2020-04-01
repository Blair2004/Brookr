<?php
namespace Modules\Brookr\Listeners;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Events\LoadDispatchEvent;

class BrookrListener
{
    public function __construct()
    {
        $this->trucksService    =   new TrucksService;
    }
    
    public function subscribe( $event )
    {
        $event->listen(
            LoadDispatchEvent::class,
            BrookrListener::class . '@markDriverAsBusy'
        );

        $event->listen(
            LoadDispatchEvent::class,
            BrookrListener::class . '@markTruckAsBusy'
        );
    }

    public function markDriverAsBusy( LoadDispatchEvent $event )
    {
        $driver     =   Driver::find( $event->load->driver_id );
        $driver->brookr_driver_status   =   0;
        $driver->save();
    }

    public function markTruckAsBusy( LoadDispatchEvent $event )
    {
        $truck      =   $this->trucksService->getTruck( $event->load->truck_id );

        if ( $truck instanceof Truck ) {
            $truck->status  =   'busy';
            $truck->save();
        }
    }

}