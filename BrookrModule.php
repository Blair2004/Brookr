<?php
namespace Modules\Brookr;

use Tendoo\Core\Facades\Hook;
use Illuminate\Support\Facades\Event;
use Modules\Brookr\Events\FormsEvent;
use Modules\Brookr\Events\FieldsEvent;
use Tendoo\Core\Services\TendooModule;

class BrookrModule extends TendooModule
{
    public function __construct()
    {
        parent::__construct( __FILE__ );

        /**
         * Register Menus
        **/
        Hook::addFilter( 'public.forms', useThis( FormsEvent::class )->method( 'register' ), 10, 2 );
        Hook::addFilter( 'public.fields', useThis( FieldsEvent::class )->method( 'login' ), 10, 2 );
    }
}