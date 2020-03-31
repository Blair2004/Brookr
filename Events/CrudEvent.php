<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Crud\DriversCrud;
use Modules\Brookr\Crud\BrookrLoadsCrud;
use Modules\Brookr\Crud\BrookrTrucksCrud;
use Modules\Brookr\Crud\BrookrCustomersCrud;
use Modules\Brookr\Crud\BrookrTrucksMaintenancesCrud;

class CrudEvent
{
    public function register( $namespace ) {
        switch( $namespace ) {
            case 'brookr.trucks':               return BrookrTrucksCrud::class;
            case 'brookr.customers':            return BrookrCustomersCrud::class;
            case 'brookr.loads':                return BrookrLoadsCrud::class;
            case 'brookr.trucks-maintenance':   return BrookrTrucksMaintenancesCrud::class;
            case 'brookr.drivers':              return DriversCrud::class;
            default :                           return $namespace;
        }
    }
}