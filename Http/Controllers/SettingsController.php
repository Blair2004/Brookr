<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Http\Request;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\Notification;
use Modules\Brookr\Services\FakerService;
use Modules\Brookr\Services\DriversService;
use Tendoo\Core\Http\Controllers\BaseController;

class SettingsController extends BaseController
{
    protected $fakerService;
    protected $optionsService;

    public function __construct()
    {
        $this->fakerService     =   new FakerService;
        $this->optionsService   =   app()->make( Options::class );
    }

    public function saveSettings( Request $request )
    {
        $dev    =   $request->input( 'dev' );

        if ( $dev[ 'enable_demo' ] ) {
            $this->fakerService->createFakeTrucks(20);
        }

        $fields     =   $request->all();

        /**
         * Only brookr options
         * should be saved
         */
        collect([ 'sms', 'general' ])->each( function( $group ) use( $fields ){
            foreach( ( array ) @$fields[ $group ] as $name => $value ) {
                if ( substr( $name, 0, 7 ) === 'brookr_' ) {
                    $this->optionsService->set( $name, $value );
                }
            }
        });

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The settings has been saved.' )
        ];
    }

    public function getNotifications( Request $request )
    {
        return Notification::for( Auth::id() )
            ->exclude( $request->input( 'excluded' ) )
            ->get();
    }
}