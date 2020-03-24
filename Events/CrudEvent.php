<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Crud\BrookrTrucksCrud;

class CrudEvent
{
    public function register( $namespace ) {
        switch( $namespace ) {
            case 'brookr.trucks': return BrookrTrucksCrud::class;
            default : return $namespace;
        }
    }
}