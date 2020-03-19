<?php
namespace Modules\Brookr\Events;

// use Tendoo\Core\Services\Menus;
// use Tendoo\Core\Services\Helper;

/**
 * Register Events
**/
class FormsEvent
{
    public function register( $form, $namespace ) 
    {
        if ( in_array( $namespace, [
            'brookr.drivers',
            'brookr.trucks',
            'brookr.customers',
            'brookr.loads',
        ])) {
            return $this->loadForm( $namespace );
        }

        return $form;
    }

    public function loadForm( $namespace, $data = [])
    {
        return include( dirname( __FILE__ ) . '/../forms/' . $namespace . '.php' );
    }
}