<?php
namespace Modules\Brookr\Events;

// use Tendoo\Core\Services\Menus;
// use Tendoo\Core\Services\Helper;

/**
 * Register Events
**/
class FormsEvent
{
    public function register( $form, $namespace, $index ) 
    {
        if ( in_array( $namespace, [
            'brookr.drivers',
            'brookr.trucks',
            'brookr.trucks-maintenances',
            'brookr.customers',
            'brookr.loads',
            'brookr.settings',
        ])) {
            return $this->loadForm( $namespace, $index );
        }

        return $form;
    }

    public function loadForm( $namespace, $index )
    {
        return include( dirname( __FILE__ ) . '/../Forms/' . $namespace . '.php' );
    }
}