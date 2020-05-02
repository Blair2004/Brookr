<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Tendoo\Core\Services\UserOptions;
use Illuminate\Support\Facades\Storage;
use Modules\Brookr\Models\Notification;
use Modules\Brookr\Models\DriversDetail;
use Modules\Brookr\Services\FakerService;
use Modules\Brookr\Services\DriversService;
use Tendoo\Core\Http\Controllers\BaseController;
use Modules\Brookr\Services\NotificationsService;

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
        collect([ 'sms', 'general', 'notifications' ])->each( function( $group ) use( $fields ){
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

    public function deleteNotification( $id )
    {
        $notification   =   new NotificationsService;
        $notification->delete( $id );
        return [
            'status'    =>  'success',
            'message'   =>  __( 'The notification has been deleted' )
        ];
    }

    public function getPermissions()
    {
        return Role::get()->map( function( $role ) {
            $permissions  =   collect( $role->permissions )->map( function( $permission ) {
                return $permission->namespace;
            });
            unset( $role->permissions );
            $role->permissions  =   $permissions;
            return $role;
        });
    }

    public function saveProfileSettings( Request $request )
    {
        $personnal  =   $request->input( 'personnal' );
        $result     =   [];

        $result[]   =   $this->updateAvatar( $personnal[ 'avatar' ] );
        $result[]   =   $this->updateDriverDetails( $personnal );
        $result[]   =   $this->updatePassword( $request->input( 'security' ) );

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The settings has been saved.' ),
            'data'      =>  $result
        ];
    }

    public function updatePassword( $fields )
    {
        if ( Hash::check( $fields[ 'old_password' ], Auth::user()->password ) ) {
            if ( $fields[ 'new_password' ] === $fields[ 'password_confirm' ] ) {
                $user               =   User::find( Auth::id() );
                $user->password     =   Hash::make( $fields[ 'new_password' ]);
                $user->save();

                return [
                    'status'    =>  'success',
                    'message'   =>  __( 'The password has been updated.' )
                ];
            }

            return [
                'status'    =>  'failed',
                'message'   =>  __( 'the new password and the confirmation password aren\'t the same.')
            ];
        }

        return [
            'status'    =>  'failed',
            'message'   =>  __( 'The old password is not correct.')
        ];
    }

    private function updateDriverDetails( $details )
    {
        $details     =   DriversDetail::where( 'driver_id', Auth::id() );
        if ( $details instanceof DriverDetail ) {
            foreach( $details as $key => $detail ) {
                if ( in_array( $key, [ 'first_name','last_name','phone_cell' ] ) ) {
                    $details->$key  =   $detail;
                }
            }
            $details->save();

            return [
                'status'    =>  'success',
                'message'   =>  __( 'The driver details has been updated.' )
            ];
        }

        return [
            'status'    =>  'failed',
            'message'   =>  __( 'No driver details has been found.' )
        ];
    }

    private function updateAvatar( $avatar )
    {
        if( ! empty( $avatar ) ) {
            $fileName       =   strtolower( Auth::user()->username ) . '-' . Str::random(10) . '.jpg';
            $userOptions    =   new UserOptions( Auth::id() );
            /**
             * Let's delete previously generated avatar if
             * that exists
             * @var string
             */
            $oldAvatar      =   'brookr-avatars/' . $userOptions->get( 'brookr_avatar' );
            if ( Storage::disk( 'public' )->exists( $oldAvatar ) ) {
                Storage::disk( 'public' )->delete( $oldAvatar );
            }
    
            /**
             * let's update the new generated avatar
             * file name
             */
            $userOptions    =   new UserOptions( Auth::id() );
            $userOptions->set( 'brookr_avatar', $fileName );
    
            /**
             * From avatar from
             * base64 to jpg
             */
            $imageParts     =   explode( ";base64,", $avatar );
            $imageTypeAux   =   explode( "image/", $imageParts[0] );
            $imageType      =   $imageTypeAux[1];
            $imageBase64    =   base64_decode( $imageParts[1] );
            Storage::disk( 'public' )->put( 'brookr-avatars/' . $fileName, $imageBase64 );

            return [
                'status'    =>  'success',
                'message'   =>  __( 'The avatar has been uploaded' )
            ];
        }

        return [
            'status'    =>  'failed',
            'message'   =>  __( 'No avatar has been uploaded' )
        ];
    }

    public function getUserAvatar()
    {
        $userOptions    =   new UserOptions( Auth::id() );
        $avatar         =   'storage/brookr-avatars/' . $userOptions->get( 'brookr_avatar' );

        return [
            'link'      =>  asset( $avatar )
        ];
    }
}