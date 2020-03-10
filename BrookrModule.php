<?php
namespace Modules\Brookr;

use Illuminate\Support\Facades\Event;
use Tendoo\Core\Services\TendooModule;

class BrookrModule extends TendooModule
{
    public function __construct()
    {
        parent::__construct( __FILE__ );

        /**
         * Register Menus
        **/
        // Event::listen( 'dashboard.loaded', 'Modules\Brookr\Events\BrookrEvents@menus' );
    }
}