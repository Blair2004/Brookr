<?php
namespace Modules\Brookr\Services;

use Exception;
use Illuminate\Support\Str;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Address;
use Modules\Brookr\Models\Customer;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class CustomersService
{
    public function defineCustomer( $fields, $id = null )
    {
        $result                         =   [];
        $result[ 'authentication' ]     =   $this->saveCustomer( $fields );
        $user                           =   $result[ 'authentication' ][ 'data' ][ 'user' ];
        $result[ 'address' ]            =   $this->registerCustomerAddress( $fields, $user->id );

        return [
            'status'    =>  'success',
            'message'   =>  $id === null ? __( 'The customer has been created.' ) : __( 'The customer has been updated.' )
        ];
    }

    /**
     * Save the customer if he's provided
     * @param array fields
     */
    private function saveCustomer( $fields, $id = null )
    {
        $customerRole                                   =   Role::namespace( 'brookr.customer' );

        if ( ! $customerRole instanceof Role ) {
            throw new Exception( __( 'Unable to find the requested role.' ) );
        }

        $rand                                           =   Str::random(5);
        $fields[ 'authentication' ][ 'email' ]          =   $fields[ 'authentication' ][ 'email' ] ?? 'customer-' . $rand . '@brookr.com';
        $fields[ 'authentication' ][ 'username' ]       =   $fields[ 'authentication' ][ 'username' ] ?? 'customer-' . $rand . '@brookr.com';
        $fields[ 'authentication' ][ 'username' ]       =   $fields[ 'authentication' ][ 'username' ] ?? Str::random(20);
        $authentication                                 =   $fields[ 'authentication' ];

        $userUsingEmail         =   User::where( 'email', $authentication[ 'email' ] )->first();
        $userUsingUsername      =   User::where( 'username', $authentication[ 'username' ] )->first();

        if ( $userUsingEmail instanceof User ) {
            throw new Exception( __( 'Unable to proceed the provided email is already in use.' ) );
        }

        if ( $userUsingUsername instanceof User ) {
            throw new Exception( __( 'Unable to proceed the provided username is already in use.' ) );
        }

        if ( $id !== null ) {
            $user               =   User::find( $id );
        } else {
            $user               =   new User;
        }
        
        $user->username     =   $authentication[ 'username' ];
        $user->password     =   Hash::make( $authentication[ 'password' ] );
        $user->email        =   $authentication[ 'email' ];
        $user->role_id      =   $customerRole->id;
        $user->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The customer has been created.' ),
            'data'      =>  compact( 'user' )
        ];
    }

    public function registerCustomerAddress( $fields, $id = null )
    {
        $address    =   Address::where( 'reference_type', 'customer' )
            ->where( 'reference_id', $id )
            ->first();

        if ( ! $address instanceof Address ) {
            $address    =   new Address;
        }

        $addresses  =   $fields[ 'address' ];
        
        foreach( $addresses as $field => $value ) {
            $address->$field        =   $value ?? '';
        }

        $address->reference_type    =   'customer';
        $address->reference_id      =   $id;
        $address->user_id           =   Auth::id();
        $address->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The customer address has been saved' )
        ];
    }

    public function deleteCustomer( $id )
    {
        $customer   =   Customer::findOrFail( $id );
        $customer->delete();

        return [
            'status'    =>  'failed',
            'message'   =>  __( 'The customer has been deleted.' )
        ];
    }
}