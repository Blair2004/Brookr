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
        switch( $namespace ) {
            case 'brookr.drivers': return $this->driversForm();
            case 'brookr.trucks': return $this->trucksForm();
            default: return $form;
        }
    }

    public function driversForm()
    {
        return include( dirname( __FILE__ ) . '../forms/drivers.php' );
    }
}