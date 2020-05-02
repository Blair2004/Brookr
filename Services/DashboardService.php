<?php
namespace Modules\Brookr\Services;

use Carbon\Carbon;
use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Modules\Brookr\Models\Dashboard;
use Tendoo\Core\Services\DateService;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\AfterCreateTruckEvent;
use Modules\Brookr\Events\BeforeDeleteLoadEvent;
use Modules\Brookr\Events\AfterCreateDriverEvent;
use Modules\Brookr\Events\BeforeDeleteTruckEvent;

class DashboardService {
    public function __construct( DateService $date )
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

        $dashboard->total_loads         += 1;
        $dashboard->week_pending_loads  += 1;

        if ( ! empty( $event->load->driver_id ) ) {
            $dashboard->unassigned_drivers  -= 1;
            $dashboard->assigned_drivers    += 1;
        }

        if ( ! empty( $event->load->truck_id ) ) {
            $dashboard->available_trucks    -= 1;
            $dashboard->assigned_trucks     += 1;
        }

        $dashboard->from_date   =   $this->getStartOfWeek( $event->load->created_at );
        $dashboard->to_date     =   $this->getEndOfWeek( $event->load->created_at );
        $dashboard->save();
    }

    /**
     * Get the current week range
     * @return Object
     */
    public function currentWeek() 
    {
        $range  =   new stdClass;
        $range->from_date    =   $this->date->copy()->startOfWeek()->toDateTimeString();
        $range->to_date      =   $this->date->copy()->endOfWeek()->toDateTimeString();
        return $range;
    }
    
    public function increaseTruck( AfterCreateTruckEvent $event )
    {
        $dashboard  =   Dashboard::range(
            $this->getStartOfWeek( $event->truck->created_at ),
            $this->getEndOfWeek( $event->truck->created_at )
        )->first();

        if ( ! $dashboard instanceof Dashboard ) {
            $dashboard  =   new Dashboard;
        }

        $dashboard->total_trucks        += 1;
        $dashboard->week_total_trucks   += 1;
        $dashboard->available_trucks    += 1;

        $dashboard->from_date   =   $this->getStartOfWeek( $event->truck->created_at );
        $dashboard->to_date     =   $this->getEndOfWeek( $event->truck->created_at );
        $dashboard->save();
    }

    public function reduceTrucks( BeforeDeleteTruckEvent $event )
    {
        $dashboard  =   Dashboard::range(
            $this->getStartOfWeek( $event->truck->created_at ),
            $this->getEndOfWeek( $event->truck->created_at )
        )->first();

        if ( ! $dashboard instanceof Dashboard ) {
            $dashboard  =   new Dashboard;
        }

        $dashboard->total_trucks        -= 1;
        $dashboard->week_total_trucks   -= 1;
        $dashboard->available_trucks    -= 1;

        $dashboard->from_date   =   $this->getStartOfWeek( $event->truck->created_at );
        $dashboard->to_date     =   $this->getEndOfWeek( $event->truck->created_at );
        $dashboard->save();
    }

    public function increaseDrivers( AfterCreateDriverEvent $event )
    {
        $dashboard  =   Dashboard::range(
            $this->getStartOfWeek( $this->date->now()->toDateTimeString() ),
            $this->getEndOfWeek( $this->date->now()->toDateTimeString() )
        )->first();

        if ( ! $dashboard instanceof Dashboard ) {
            $dashboard  =   new Dashboard;
        }

        $dashboard->total_drivers     += 1;

        $dashboard->from_date   =   $this->getStartOfWeek( $this->date->now()->toDateTimeString() );
        $dashboard->to_date     =   $this->getEndOfWeek( $this->date->now()->toDateTimeString() );
        $dashboard->save();
    }

    public function reduceDrivers( BeforeDeleteDriverEvent $event )
    {
        $dashboard  =   Dashboard::range(
            $this->getStartOfWeek( $this->date->now()->toDateTimeString() ),
            $this->getEndOfWeek( $this->date->now()->toDateTimeString() )
        )->first();

        if ( ! $dashboard instanceof Dashboard ) {
            $dashboard  =   new Dashboard;
        }

        $dashboard->total_drivers     -= 1;

        $dashboard->from_date   =   $this->getStartOfWeek( $this->date->now()->toDateTimeString() );
        $dashboard->to_date     =   $this->getEndOfWeek( $this->date->now()->toDateTimeString() );
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
                $dashboard->week_pending_loads   -= 1;
            break;
        }

        if ( ! empty( $event->load->driver_id ) ) {
            $dashboard->unassigned_drivers  -= 1;
            $dashboard->assigned_drivers    += 1;
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

    public function getReportForRange( $from, $to )
    {
        $prevWeek   =   Carbon::parse( $from )->subDay();
        $prevFrom   =   $prevWeek->copy()->startOfWeek()->toDateTimeString();
        $prevTo     =   $prevWeek->copy()->endOfWeek()->toDateTimeString();

        return [
            'current'   =>  Dashboard::range( $from, $to )->first(),
            'previous'  =>  Dashboard::range( $prevFrom, $prevTo )->first()      
        ];
    }

    public function refreshFromRange( $from, $to )
    {
        
        $weekReport     =   Dashboard::range( $from, $to )->first();
        
        if ( ! $weekReport instanceof Dashboard ) {
            $weekReport             =   new Dashboard;
            $weekReport->from_date  =   $from;
            $weekReport->to_date    =   $to;
        }
        
        $total_loads            =   LoadDelivery::count();
        $total_incomes          =   LoadDelivery::sum( 'cost' );
        $total_drivers          =   Driver::count();
        $total_trucks           =   Truck::count();

        $week_total_incomes     =   LoadDelivery::where( 'created_at', '>=', $from )->where( 'created_at', '<=', $to )->sum( 'cost' );
        $week_total_drivers     =   Driver::where( 'created_at', '>=', $from )->where( 'created_at', '<=', $to )->count();
        $week_total_trucks      =   Truck::where( 'created_at', '>=', $from )->where( 'created_at', '<=', $to )->count();
        $week_total_loads       =   LoadDelivery::where( 'created_at', '>=', $from )->where( 'created_at', '<=', $to )->count();
        $week_pending_loads     =   LoadDelivery::where( 'created_at', '>=', $from )->where( 'created_at', '<=', $to )->where( 'status', 'pending' )->count();
        $week_ongoing_loads     =   LoadDelivery::where( 'created_at', '>=', $from )->where( 'created_at', '<=', $to )->where( 'status', 'shipped' )->count();

        $assigned_drivers       =   Driver::where( 'brookr_driver_status', 'assigned' )->count();
        $unassigned_drivers     =   Driver::where( 'brookr_driver_status', 'unassigned' )->count();
        $unavailable_drivers    =   Driver::where( 'brookr_driver_status', 'unavailable' )->count();

        $available_trucks       =   Truck::where( 'status', 'available' )->count();
        $assigned_trucks        =   Truck::where( 'status', 'unavailable' )->count();

        $weekReport->total_loads            =   $total_loads;
        $weekReport->total_incomes          =   $total_incomes;
        $weekReport->total_drivers          =   $total_drivers;
        $weekReport->total_trucks           =   $total_trucks;
        $weekReport->week_total_incomes     =   $week_total_incomes;
        $weekReport->week_total_drivers     =   $week_total_drivers;
        $weekReport->week_total_trucks      =   $week_total_trucks;
        $weekReport->week_total_loads       =   $week_total_loads;
        $weekReport->week_pending_loads     =   $week_pending_loads;
        $weekReport->week_ongoing_loads     =   $week_ongoing_loads;
        $weekReport->assigned_drivers       =   $assigned_drivers;
        $weekReport->unassigned_drivers     =   $unassigned_drivers;
        $weekReport->unavailable_drivers    =   $unavailable_drivers;
        $weekReport->available_trucks       =   $available_trucks;
        $weekReport->assigned_trucks        =   $assigned_trucks;
        $weekReport->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The report has been generated' )
        ];
    }
}