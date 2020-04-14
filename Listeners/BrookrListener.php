<?php
namespace Modules\Brookr\Listeners;

use Tendoo\Core\Models\Role;
use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Services\DriversService;
use Modules\Brookr\Events\AfterEditLoadEvent;
use Modules\Brookr\Services\DashboardService;
use Modules\Brookr\Events\BeforeEditLoadEvent;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\AfterDeleteLoadEvent;
use Modules\Brookr\Events\BeforeCreateLoadEvent;
use Modules\Brookr\Events\BeforeDeleteLoadEvent;
use Modules\Brookr\Services\NotificationsService;
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

        $event->listen(
            AfterEditLoadEvent::class,
            BrookrListener::class . '@notifyAdministrator'
        );

        /**
         * related to the dashboard
         */
        $event->listen(
            AfterCreateLoadEvent::class,
            DashboardService::class . '@increaseLoad'
        );

        $event->listen(
            BeforeDeleteLoadEvent::class,
            DashboardService::class . '@reduceLoad'
        );
    }

    public function notifyAdministrator( AfterEditLoadEvent $event )
    {
        $this->notificationService  =   new NotificationsService;

        Role::namespace( 'admin' )->users()->each( function( $user ) use ( $event ) {
            $this->notificationService->notify([
                'title'         =>  sprintf( __( '%s edited' ), $event->load->name ),
                'description'   =>  sprintf(
                    __( 'A new load %s(%s) has been assigned to %s. The delivery location is set to %s and must be delivered on %s' ),
                    $event->load->name,
                    $event->load->load_reference,
                    $event->driver->username,
                    $event->load->delivery_city,
                    $event->load->delivery_date
                ),
                'actions'       =>  []
            ], $user->id );
        });
    }
}