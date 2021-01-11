<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Crud\DriversCrud;
use Modules\Brookr\Crud\CompaniesCrud;
use Modules\Brookr\Crud\BrookrLoadsCrud;
use Modules\Brookr\Crud\BrookrTrucksCrud;
use Modules\Brookr\Crud\BrookrCustomersCrud;
use Modules\Brookr\Crud\BrookrTrucksMaintenancesCrud;
use Modules\Brookr\Crud\BrookrDriversAssignedLoadsCrud;
use Modules\Brookr\Crud\BrookrDriversUnassignedLoadsCrud;
use Modules\Brookr\Crud\LocationCrud;

class CrudEvent
{
    public function register( $namespace ) {
        switch( $namespace ) {
            case 'brookr.trucks':                       return BrookrTrucksCrud::class;
            case 'brookr.customers':                    return BrookrCustomersCrud::class;
            case 'brookr.loads':                        return BrookrLoadsCrud::class;
            case 'brookr.drivers-loads.assigned':       return BrookrDriversAssignedLoadsCrud::class;
            case 'brookr.drivers-loads.unassigned':     return BrookrDriversUnassignedLoadsCrud::class;
            // case 'brookr.drivers-loads.delivered':      return BrookrLoadsCrud::class;
            case 'brookr.trucks-maintenance':           return BrookrTrucksMaintenancesCrud::class;
            case 'brookr.drivers':                      return DriversCrud::class;
            case 'brookr.locations':                    return LocationCrud::class;
            case 'brookr.companies':                    return CompaniesCrud::class;
            default :                                   return $namespace;
        }
    }
}