<?php
namespace Modules\Brookr\Services;

use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Driver;
use Modules\Brookr\Models\Address;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\DriversDetail;
use Modules\Brookr\Models\DriversPayment;
use Tendoo\Core\Exceptions\NotFoundException;
use Modules\Brookr\Events\BeforeEditLoadEvent;
use Modules\Brookr\Events\AfterCreateLoadEvent;
use Modules\Brookr\Events\BeforeCreateLoadEvent;
use Modules\Brookr\Events\BeforeDeleteLoadEvent;
use Modules\Brookr\Events\AfterCreateDriverEvent;
use Modules\Brookr\Events\AfterUpdateDriverEvent;
use Modules\Brookr\Events\BeforeCreateDriverEvent;
use Modules\Brookr\Events\BeforeUpdateDriverEvent;
use Modules\Brookr\Models\CompanyFuelCharge;

class DriversService 
{
    public function setDriver( $fields, $id = null )
    {
        $result             =   [];

        /**
         * If we're creating the driver dispatch the new event 
         * otherwiste dispatch the update event
         */
        if ( $id !== null ) {
            $driver = Driver::findOrFail( $id );
        }

        event( $id === null ? new BeforeCreateDriverEvent( $fields ) : new BeforeUpdateDriverEvent( 
            $driver,
            $driver->details
        ) );

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

        event( $id === null ? new AfterCreateDriverEvent( $result[ 'authentication' ][ 'data' ][ 'user' ] ) : new AfterUpdateDriverEvent( Driver::find( $id ) ) );

        return [
            'status'    =>  'success',
            'message'   =>  $id === null ? __( 'The driver has been successfully created.' ) : __( 'The driver has been successfully updated.' ),
            'data'      =>  $result
        ];
    }

    public function get( $id )
    {
        return Driver::findOrFail( $id );
    }

    public function proceedDetailsRegistration( $fields, $result )
    {
        if ( $result[ 'status' ] === 'success' ) {
            $user   =   $result[ 'data' ][ 'user' ];

            /**
             * let's figure out if the use has 
             */
            $driversDetails  =   DriversDetail::where( 'driver_id', $user->id )->first();

            if ( ! $driversDetails instanceof DriversDetail ) {
                $driversDetails  =   new DriversDetail;
            }

            /**
             * This will check if the driver 
             * status could be changed
             */
            event( new BeforeUpdateDriverEvent( 
                Driver::find( $user->id ), 
                $driversDetails, 
                $fields[ 'professional' ][ 'status' ] 
            ) );

            $driversDetails->user_id                     =   Auth::id();

            /**
             * move uploaded files
             */
            if ( ! empty( $fields[ 'personnal' ][ 'personal_card_url' ] ) ) {
                if ( Storage::disk( 'public' )->exists( $fields[ 'personnal' ][ 'personal_card_url' ] ) ) {
                    $info       =   pathinfo( $fields[ 'personnal' ][ 'personal_card_url' ] );
                    $filePath   =   '/brookr-uploads/drivers/driving-licences/' . $user->username . '.' . $info[ 'extension' ];

                    Storage::disk( 'public' )->put(
                        $filePath,
                        Storage::disk( 'public' )->get( $fields[ 'personnal' ][ 'personal_card_url' ] )
                    );

                    $fields[ 'personnal' ][ 'personal_card_url' ]   =  $filePath;
                    $driversDetails->personal_card_url              =   $fields[ 'personnal' ][ 'personal_card_url' ];
                }
            }

            if ( ! empty( $fields[ 'medical' ][ 'medical_card_url' ] ) ) {
                if ( Storage::disk( 'public' )->exists( $fields[ 'medical' ][ 'medical_card_url' ] ) ) {
                    $info       =   pathinfo( $fields[ 'medical' ][ 'medical_card_url' ] );
                    $filePath   =   '/brookr-uploads/drivers/medical-cards/' . $user->username . '.' . $info[ 'extension' ];
                    
                    Storage::disk( 'public' )->put(
                        $filePath,
                        Storage::disk( 'public' )->get( $fields[ 'medical' ][ 'medical_card_url' ] )
                    );
                    
                    $fields[ 'medical' ][ 'medical_card_url' ]      =  $filePath;
                    $driversDetails->medical_card_url               =   $fields[ 'medical' ][ 'medical_card_url' ];
                }
            }            

            $driversDetails->driver_id                   =   $user->id;
            $driversDetails->first_name                  =   $fields[ 'personnal' ][ 'first_name' ];
            $driversDetails->last_name                   =   $fields[ 'personnal' ][ 'last_name' ];
            $driversDetails->phone_cell                  =   $fields[ 'personnal' ][ 'phone_cell' ];
            $driversDetails->phone_home                  =   $fields[ 'personnal' ][ 'phone_home' ];
            $driversDetails->birth_date                  =   $fields[ 'personnal' ][ 'birth_date' ];
            $driversDetails->company_id                  =   $fields[ 'professional' ][ 'company_id' ];
            $driversDetails->fein                        =   $fields[ 'professional' ][ 'fein' ];
            $driversDetails->ssn                         =   $fields[ 'professional' ][ 'ssn' ];
            $driversDetails->fuel_card                   =   $fields[ 'professional' ][ 'fuel_card' ];
            $driversDetails->deduct_tools                =   $fields[ 'professional' ][ 'deduct_tools' ] ? true : false;
            $driversDetails->deduct_fuel                 =   $fields[ 'professional' ][ 'deduct_fuel' ] ? true : false;
            $driversDetails->work_hired_date             =   $fields[ 'professional' ][ 'work_hired_date' ];
            $driversDetails->work_terminated_date        =   $fields[ 'professional' ][ 'work_terminated_date' ];
            $driversDetails->escrow_starting_balance     =   $fields[ 'professional' ][ 'escrow_starting_balance' ] ?? 0;
            $driversDetails->driving_license_expiration  =   $fields[ 'professional' ][ 'driving_license_expiration' ];
            $driversDetails->ipass                       =   $fields[ 'professional' ][ 'ipass' ];
            $driversDetails->comments                    =   $fields[ 'professional' ][ 'comments' ] ?? '';
            $driversDetails->status                      =   $fields[ 'professional' ][ 'status' ] ?? 'unavailable';
            $driversDetails->sms_notifications           =   $fields[ 'notifications' ][ 'sms_notifications' ] === true;
            $driversDetails->email_notifications         =   $fields[ 'notifications' ][ 'email_notifications' ] === true;
            $driversDetails->medical_card_expiration     =   $fields[ 'medical' ][ 'medical_card_expiration' ];
            $driversDetails->medical_drug_test           =   $fields[ 'medical' ][ 'medical_drug_test' ];
            $driversDetails->save();

            return [
                'status'    =>  'success',
                'message'   =>  __( 'The driver has been created' ),
                'data'      =>  [
                    'users'     => $user
                ]
            ];
        }
    }

    public function setDriversAddresses( $fields, $result, $id = null )
    {
        $user       =   $result[ 'data' ][ 'user' ];

        if ( $id !== null ) {
            $address    =   Address::find( $id );
        } else {
            $address    =   Address::where( 'reference_id', $user->id )
                ->where( 'reference_type', 'driver' )
                ->first();
                
            if ( ! $address instanceof Address ) {
                $address                    =   new Address;
            }
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

        if ( $role instanceof Role ) {

            /**
             * if the driver id is provided
             * we'll figure out if we're creating a user which exists.
             * If not we'll attempt to create.
             */
            if ( ( $user = User::find( $id ) ) instanceof User ) {
                $previousUser     =   User::where( 'email', $authentication[ 'email' ] )
                    ->where( 'id', '<>', $id )
                    ->first();

                if ( $previousUser instanceof User ) {
                    throw new Exception( __( 'Unable to proceed this email is already used.' ) );
                }
                
                $this->saveDriverAsUser([
                    'role_id'   =>  $role->id,
                    'email'     =>  $authentication[ 'email' ],
                    'active'    =>  isset( $authentication[ 'active' ] ) ? true : false,
                ], $user );

                if ( ! empty( $authentication[ 'password' ] ) ) {
                    $this->saveDriverAsUser([
                        'password'  =>  Hash::make( $authentication[ 'password' ])
                    ], $user );
                }

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
                    $user           =   new Driver;

                    $this->saveDriverAsUser([
                        'role_id'   =>  $role->id,
                        'email'     =>  $authentication[ 'email' ],
                        'password'  =>  Hash::make( $authentication[ 'password' ]),
                        'username'  =>  $authentication[ 'username' ],
                        'active'    =>  isset( $authentication[ 'active' ] ) ? true : false,
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

    /**
     * Will verify if a driver status 
     * can be changed and throw an error if it shouldn't.
     * @param BeforeUpdateDriverEvent $event
     * @return void
     */
    public function handleCanUpdateDriverStatus( BeforeUpdateDriverEvent $event )
    {
        if ( $event->driver instanceof Driver ) {
            $ongoingLoadDelivery    =   $event->driver->loads()->ongoing()->count();
            if ( $ongoingLoadDelivery > 0 && $event->status === 'available' ) {
                // throw new Exception( __( 'Cannot change the status of the driver, since he\'s assigned to an ongoing delivery.' ) );
            }
        }
    }

    public function handleMarkDriverUnavailable( AfterCreateLoadEvent $event )
    {
        if ( $event->load instanceof LoadDelivery ) {
            $driver     =   Driver::find( $event->load->driver_id );
            if ( $driver instanceof Driver ) {
                $driver->brookr_driver_status   =   'unavailable';
                $driver->save();
            }
        }
    }

    public function handleChangeDriverStatus( BeforeCreateLoadEvent $event )
    {
        if ( $event->driver instanceof Driver && $event->driver->brookr_driver_status === 'unavailable' ) {
            // throw new Exception( __( 'This driver cannot be assigned to this load as he\'s currently unavailable.' ) );
        }
    }

    /**
     * If the driver has been changed,
     * we'll free the old driver
     */
    public function handleFreedDriverIfDifferent( BeforeEditLoadEvent $event )
    {
        if ( isset( $event->fields[ 'driver_id' ] ) ) {
            $newDriverID    =   ( int ) $event->fields[ 'driver_id' ];
    
            if ( $event->driver instanceof Driver && $newDriverID !== $event->driver->id ) {
                
                $driver     =   Driver::findOrFail( $newDriverID );
    
                if ( $driver->brookr_driver_status === 'unavailable' ) {
                    // throw new Exception( __( 'Cannot assign this driver as he is not available.' ) );
                }
    
                $driver->brookr_driver_status    =   'unavailable';
                $driver->save();
    
                $event->driver->brookr_driver_status     =   'available';
                $event->driver->save();
            }
        }
    }

    /**
     * Since the load is about to be
     * deleted, let's freed the driver
     * @param BeforeDeleteLoadEvent $event
     * @return void
     */
    public function handleFreedDriver( BeforeDeleteLoadEvent $event )
    {
        if ( $event->driver instanceof Driver ) {
            $event->driver->brookr_driver_status     =   true;
            $event->driver->save();
        }
    }

    /**
     * get drivers which medial card expire soon
     * @param int total to get
     * @param string order
     * @return array
     */
    public function getByMedicalCard( $total = 10, $order = 'asc' )
    {
        return DriversDetail::where( 'status', '!=', 'unavailable' ) 
            ->orderBy( 'medical_card_expiration', $order )
            ->limit( $total )
            ->get()
            ->map( function( $detail ) {
            $detail->driver;
            return $detail;
        });
    }

    /**
     * get drivers which medial card expire soon
     * @param int total to get
     * @param string order
     * @return array
     */
    public function getByDriverCard( $total = 10, $order = 'asc' )
    {
        return DriversDetail::where( 'status', '!=', 'unavailable' )
            ->orderBy( 'driving_license_expiration', $order )
            ->limit( $total )
            ->get()
            ->map( function( $detail ) {
            $detail->driver;
            return $detail;
        });
    }

    /**
     * get all drivers sorted by name
     * @param int total to get
     * @param string order
     * @return array
     */
    public function getByName( $order = 'asc' )
    {
        return DriversDetail::orderBy( 'first_name', $order )
            ->with( 'company' )
            ->get()
            ->map( function( $detail ) {
            $detail->driver;
            return $detail;
        });
    }



    public function deleteDriver( $id )
    {
        Driver::findOrFail( $id )->delete();
        
        return [
            'status'    =>  'success',
            'message'   =>  __( 'The driver has been deleted.' )
        ];
    }

    public function availability( $driver )
    {
        if ( ! $driver instanceof User ) {
            $driver     =   User::findOrFail( $driver );
        }

        return $driver->brookr_driver_status === 'available' ? [
            'status'    =>  'success',
            'message'   =>  __( 'The driver is available' )
        ] : [
            'status'    =>  'failed',
            'message'   =>  __( 'The driver is not available' )
        ];
    }

    public function updatePayment( $payment_id, $fields )
    {
        $payment                =   DriversPayment::findOrFail( $payment_id );
        $payment->amount        =   $fields[ 'amount' ] ?? 0;
        $payment->created_at    =   $fields[ 'created_at' ] ?? 0;
        $payment->description   =   $fields[ 'description' ];
        $payment->user_id       =   Auth::id();
        $payment->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The payment has been correctly made.' )   
        ];
    }

    public function makePayment( $driver_id, $fields )
    {
        $driver     =   $this->get( $driver_id );

        $payment                =   new DriversPayment;
        $payment->amount        =   $fields[ 'amount' ] ?? 0;
        $payment->description   =   $fields[ 'description' ];
        $payment->type          =   'advance';
        $payment->driver_id     =   $driver_id;
        $payment->user_id       =   Auth::id();
        $payment->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The payment has been correctly made.' )   
        ];
    }

    public function saveFuelExpense( $fields )
    {
        $driver             =   Driver::with( 'details.company' )->find( $fields[ 'driver_id' ] );

        $fuel               =   new CompanyFuelCharge();
        $fuel->company_id   =   $driver->details->company->id;
        $fuel->amount       =   $fields[ 'amount' ];
        $fuel->driver_id    =   $driver->id;
        $fuel->created_at   =   Carbon::parse( $fields[ 'date' ] )->toDateTimeString();
        $fuel->user_id      =   Auth::id();
        $fuel->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The fuel expense has been saved.' ),
            'data'      =>  compact( 'fuel' )
        ];
    }
}