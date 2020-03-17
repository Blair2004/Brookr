<?php
namespace Modules\Brookr;

use Illuminate\Support\Facades\Event;
use Modules\Brookr\Events\FormsEvent;
use Tendoo\Core\Services\TendooModule;

class BrookrModule extends TendooModule
{
    public function __construct()
    {
        parent::__construct( __FILE__ );

        /**
         * Register Menus
        **/
        Hook::addFilter( 'public.forms', useThis( FormsEvent::class )->method( 'register' ) );
    }
}