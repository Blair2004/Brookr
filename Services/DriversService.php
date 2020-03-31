<?php
namespace Modules\Brookr\Services;

use Exception;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Address;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Modules\Brookr\Models\DriverDetail;
use Tendoo\Core\Exceptions\NotFoundException;

class DriversService 
{
    public function setDriver( $fields, $id = null )
    {
        $result             =   [];

        $result[ 'authentication' ]     =   $this->proceedUserRegistration( $fields, 'brookr.driver', $id );

        /**
         * If the system has failed creating 
         * the driver, we cannot proceed
         */
        if ( $result[ 'authentication' ][ 'status' ] === 'failed' ) {
            return $result[ 'authentication' ];
        }

        $result[ 'details' ]            =   $this->proceedDetailsRegistration( $fields, $result[ 'authentication' ] );
        $result[ 'address' ]            =   $this->setDriversAddresses( $fields[ 'address' ], $result[ 'authentication' ] );

        return [
            'status'    =>  'success',
            'message'   =>  $id === null ? __( 'The driver has been successfully created.' ) : __( 'The driver has been successfully updated.' ),
            'data'      =>  $result
        ];
    }

    public function proceedDetailsRegistration( $fields, $result )
    {
        if ( $result[ 'status' ] === 'success' ) {
            $user   =   $result[ 'data' ][ 'user' ];

            /**
             * let's figure out if the use has 
             */
            $driverDetails  =   DriverDetail::where( 'driver_id', $user->id )->first();

            if ( ! $driverDetails instanceof DriverDetail ) {
                $driverDetails  =   new DriverDetail;
            }

            $driverDetails->user_id                     =   Auth::id();
            $driverDetails->driver_id                   =   $user->id;
            $driverDetails->company_driver              =   $fields[ 'professional' ][ 'company_driver' ];
            $driverDetails->fein                        =   $fields[ 'professional' ][ 'fein' ];
            $driverDetails->ssn                         =   $fields[ 'professional' ][ 'ssn' ];
            $driverDetails->fuel_card                   =   $fields[ 'professional' ][ 'fuel_card' ];
            $driverDetails->deduct_tools                =   $fields[ 'professional' ][ 'deduct_tools' ] ? true : false;
            $driverDetails->deduct_fuel                 =   $fields[ 'professional' ][ 'deduct_fuel' ] ? true : false;
            $driverDetails->work_hired_date             =   $fields[ 'professional' ][ 'work_hired_date' ];
            $driverDetails->work_terminated_date        =   $fields[ 'professional' ][ 'work_terminated_date' ];
            $driverDetails->escrow_starting_balance     =   $fields[ 'professional' ][ 'escrow_starting_balance' ] ?? 0;
            $driverDetails->ipass                       =   $fields[ 'professional' ][ 'ipass' ];
            $driverDetails->comments                    =   $fields[ 'professional' ][ 'comments' ] ?? '';
            $driverDetails->status                      =   $fields[ 'professional' ][ 'status' ] ?? 'unavailable';
            $driverDetails->sms_notifications           =   $fields[ 'notifications' ][ 'sms_notifications' ] === true;
            $driverDetails->email_notifications         =   $fields[ 'notifications' ][ 'email_notifications' ] === true;
            // $driverDetails->medical_card_url         =   $fields[ 'medical' ][ 'medical_card_url' ];
            $driverDetails->medical_card_expiration     =   $fields[ 'medical' ][ 'medical_card_expiration' ];
            $driverDetails->medical_drug_test           =   $fields[ 'medical' ][ 'medical_drug_test' ];
            $driverDetails->save();
        }
    }

    public function setDriversAddresses( $fields, $result, $id = null )
    {
        if ( $id !== null ) {
            $address    =   Address::find( $id );
        } else {
            $address                    =   new Address;
        }
        
        $address->user_id               =   Auth::id();
        $address->reference_type        =   'driver';
        $address->reference_id          =   $result[ 'data' ][ 'user' ]->id;
        $address->address_first_name    =   $fields[ 'address_first_name'];
        $address->address_second_name   =   $fields[ 'address_second_name'];
        $address->address_street_1      =   $fields[ 'address_street_1'];
        $address->address_street_2      =   $fields[ 'address_street_2'];
        $address->address_city          =   $fields[ 'address_city' ];
        $address->address_state         =   $fields[ 'address_state' ];
        $address->address_zip           =   $fields[ 'address_zip' ];
        $address->save();
    }

    private function saveDriverAsUser( $fields, User $driver )
    {
        foreach( $fields as $key => $value ) {
            $driver->$key   =   $value;
        }
        $driver->save();
    }

    public function proceedUserRegistration( $fields, $role, $id = null )
    {
        $role               =   Role::namespace( $role );
        $authentication     =   $fields[ 'authentication' ];

        if ( $role instanceof Role && empty( $fields[ 'password' ] ) ) {

            /**
             * if the driver id is provided
             * we'll figure out if we're creating a user which exists.
             * If not we'll attempt to create.
             */
            if ( ( $user = User::find( $id ) ) instanceof User ) {
                
                $this->saveDriverAsUser([
                    'role_id'   =>  $role->id,
                    'password'  =>  Hash::make( $authentication[ 'password' ]),
                    'active'    =>  $fields[ 'professional' ][ 'status' ] === 'active',
                ], $user );

                return [
                    'status'    =>  'success',
                    'message'   =>  __( 'The user has been updated.' ),
                    'data'      =>  compact( 'user' )
                ];
            } else {
                $user   =   User::where( 'email', $authentication[ 'email' ] )
                    ->orWhere( 'username', $authentication[ 'username' ] )
                    ->first();

                if ( ! $user instanceof User ) {
                    $user           =   new User;

                    $this->saveDriverAsUser([
                        'role_id'   =>  $role->id,
                        'email'     =>  $authentication[ 'email' ],
                        'username'  =>  $authentication[ 'username' ],
                        'password'  =>  Hash::make( $authentication[ 'password' ]),
                        'active'    =>  $fields[ 'professional' ][ 'status' ] === 'active',
                    ], $user );

                    return [
                        'status'    =>  'success',
                        'message'   =>  __( 'The user has been created.' ),
                        'data'      =>  compact( 'user' )
                    ];
                }
            }

            throw new Exception( __( 'The provided email is already in use.' ) );
        }

        throw new NotFoundException([
            'status'    =>  'failed',
            'message'   =>  __( 'Unable to find the requested role' )
        ]);
    }
}