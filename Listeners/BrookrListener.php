<?php
namespace Modules\Brookr\Listeners;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Services\DriversService;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\BeforeCreateLoadEvent;
use Modules\Brookr\Events\BeforeDeleteLoadEvent;
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
            DriversService::class . '@handleMarkDriverUnavailable'
        );

        $event->listen(
            AfterCreateLoadEvent::class,
            TrucksService::class . '@handleMarkTruckUnavailable'
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
            AfterCreateLoadEvent::class,
            TrucksService::class . '@handleMarkTruckUnavailable'
        );

        $event->listen(
            BeforeEditLoadEvent::class,
            TrucksService::class . '@handleFreedTruckIfDifferent'
        );

        $event->listen(
            BeforeEditLoadEvent::class,
            DriversService::class . '@handleFreedDriverIfDifferent'
        );

        $event->listen(
            BeforeEditLoadEvent::class,
            LoadsService::class . '@handleCanEditLoad'
        );

        $event->listen(
            BeforeDeleteLoadEvent::class,
            TrucksService::class . '@handleFreedTruck'
        );

        $event->listen(
            BeforeDeleteLoadEvent::class,
            DriversService::class . '@handleFreedDriver'
        );
    }
}