<?php
namespace Modules\Brookr\Listeners;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Services\DriversService;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\BeforeCreateLoadEvent;
use Modules\Brookr\Events\BeforeUpdateDriverEvent;

class BrookrListener
{
    public function __construct()
    {
        $this->trucksService    =   new TrucksService;
        $this->driversService   =   new DriversService;
    }
    
    public function subscribe( $event )
    {
        $event->listen(
            AfterCreateLoadEvent::class,
            DriversService::class . '@handleMarkDriverBusy'
        );

        $event->listen(
            AfterCreateLoadEvent::class,
            TrucksService::class . '@handleMarkTruckBusy'
        );

        $event->listen(
            BeforeUpdateDriverEvent::class,
            DriversService::class . '@handleCanUpdateDriverStatus'
        );

        $event->listen(
            BeforeCreateLoadEvent::class,
            DriversService::class . '@handleChangeDriverStatus'
        );

        $event->listen(
            BeforeCreateLoadEvent::class,
            TruckService::class . '@canAssignTruck'
        );
    }

    public function markDriverAsBusy( AfterCreateLoadEvent $event )
    {
        
    }
}