<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Crud\BrookrTrucksCrud;
use Modules\Brookr\Crud\BrookrTrucksMaintenancesCrud;

class CrudEvent
{
    public function register( $namespace ) {
        switch( $namespace ) {
            case 'brookr.trucks': return BrookrTrucksCrud::class;
            case 'brookr.trucks-maintenance': return BrookrTrucksMaintenancesCrud::class;
            default : return $namespace;
        }
    }
}