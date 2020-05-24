<?php
namespace Modules\Brookr;

use Tendoo\Core\Facades\Hook;
use Modules\Brookr\Events\CrudEvent;
use Illuminate\Support\Facades\Event;
use Modules\Brookr\Events\FormsEvent;
use Modules\Brookr\Events\FieldsEvent;
use Tendoo\Core\Services\TendooModule;

include( dirname( __FILE__ ) . '/vendor/autoload.php' );
include( dirname( __FILE__ ) . '/helper.php' );
include( dirname( __FILE__ ) . '/Jobs/SMSDriverJob.php' );

class BrookrModule extends TendooModule
{
    public function __construct()
    {
        parent::__construct( __FILE__ );

        /**
         * Register Menus
        **/
        Hook::addFilter( 'register.crud', useThis( CrudEvent::class )->method( 'register' ) );
        Hook::addFilter( 'public.forms', useThis( FormsEvent::class )->method( 'register' ), 10, 3 );
        Hook::addFilter( 'public.fields', useThis( FieldsEvent::class )->method( 'login' ), 10, 3 );
    }
}