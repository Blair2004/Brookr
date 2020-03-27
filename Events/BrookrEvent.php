<?php
namespace Modules\Brookr\Events;

// use Tendoo\Core\Services\Menus;
// use Tendoo\Core\Services\Helper;

/**
 * Register Events
**/
class BrookrEvent
{
    public function __construct( Menus $menus )
    {
        $this->menus    =   $menus;
    }
}