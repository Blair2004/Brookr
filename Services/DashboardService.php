<?php
namespace Modules\Brookr\Services;

use Carbon\Carbon;
use Modules\Brookr\Models\Dashboard;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\BeforeDeleteLoadEvent;

class DashboardService {
    public function __construc( DateService $date )
    {
        $this->date    =    $date;
    }

    public function increaseLoad( AfterCreateLoadEvent $event )
    {
        $dashboard  =   Dashboard::range(
            $this->getStartOfWeek( $event->load->created_at ),
            $this->getEndOfWeek( $event->load->created_at )
        )->first();

        if ( ! $dashboard instanceof Dashboard ) {
            $dashboard  =   new Dashboard;
        }

        $dashboard->total_loads     += 1;
        $dashboard->pending_loads   += 1;

        if ( ! empty( $event->load->driver_id ) ) {
            $dashboard->available_drivers   -= 1;
            $dashboard->unavailable_drivers += 1;
        }

        if ( ! empty( $event->load->truck_id ) ) {
            $dashboard->available_trucks    -= 1;
            $dashboard->assigned_trucks     += 1;
        }

        $dashboard->from_date   =   $this->getStartOfWeek( $event->load->created_at );
        $dashboard->to_date     =   $this->getEndOfWeek( $event->load->created_at );
        $dashboard->save();
    }

    public function reduceLoad( BeforeDeleteLoadEvent $event )
    {
        $startOfWeek    =   $this->getStartOfWeek( $event->load->created_at );
        $endOfWeek      =   $this->getEndOfWeek( $event->load->created_at );

        $dashboard  =   Dashboard::range(
            $this->getStartOfWeek( $event->load->created_at ),
            $this->getEndOfWeek( $event->load->created_at )
        );

        if ( $dashboard instanceof Dashboard ) {
            $dashboard  =   new Dashboard;
        }

        $dashboard->total_loads     -= 1;
        switch( $event->load->status ) {
            case 'pending' : 
                $dashboard->pending_loads   -= 1;
            break;
        }

        if ( ! empty( $event->load->driver_id ) ) {
            $dashboard->available_drivers   -= 1;
            $dashboard->unavailable_drivers += 1;
        }

        if ( ! empty( $event->load->truck_id ) ) {
            $dashboard->available_trucks    -= 1;
            $dashboard->assigned_trucks     += 1;
        }

        $dashboard->from_date   =   $this->getStartOfWeek( $event->load->created_at );
        $dashboard->to_date     =   $this->getEndOfWeek( $event->load->created_at );

        $dashboard->save();
    }

    public function getStartOfWeek( $date )
    {
        return Carbon::parse( $date )->startOfWeek()->toDateTimeString();
    }

    public function getEndOfWeek( $date )
    {
        return Carbon::parse( $date )->endOfWeek()->toDateTimeString();
    }


    public function weekStart()
    {
        return $this->date->copy()->startOfWeek()->toDateTimeString();
    }

    public function weekEnds()
    {
        return $this->date->copy()->endOfWeek()->toDateTimeString();
    }
}