<?php

use Modules\Brookr\Models\Address;
use Modules\Brookr\Models\Customer;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\CustomerDetail;

if ( ! Auth::user()->allowedTo( 'brookr.create.customers' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

$customer   =   Customer::find( $index );
$details    =   CustomerDetail::where( 'customers_id', $index )->first();
$address    =   Address::where( 'reference_id', $index )
    ->where( 'reference_type', 'customer' )
    ->first();

return [
    'sections'      =>      [
        [
            'namespace'     =>  'general',
            'title'         =>  __( 'General' ),
            'description'   =>  __( 'all general informations about the truck' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'First Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'first_name',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'the customer first name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'last_name',
                    'value'         =>  $details->last_name ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The customer last name.' ),
                ], [
                    'label'         =>  __( 'Displayed Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'display_name',
                    'value'         =>  $details->display_name ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The customer displayed name.' ),
                ], [
                    'label'         =>  __( 'Short Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'short_name',
                    'value'         =>  $details->short_name ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'A short name used for the customer.' ),
                ], [
                    'label'         =>  __( 'Description' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'description',
                    'value'         =>  $details->description ?? '',
                    'type'          =>  'textarea',
                ], 
            ]
        ], 
        // [
        //     'namespace'     =>  'authentication',
        //     'title'         =>  __( 'Authentication' ),
        //     'description'   =>  __( 'Every settings about authenting.' ),
        //     'fields'        =>  [
        //         [
        //             'label'     =>  __( 'Username' ),
        //             'name'      =>  'username',
        //             // 'validation'    =>  'required',
        //             'description'   =>  __( 'Will be used to ensure durin the authentication.' ),
        //             'type'          =>  'text',
        //         ], [
        //             'label'     =>  __( 'Email' ),
        //             'name'      =>  'email',
        //             'value'     =>  $customer->email ?? '',
        //             'validation'    =>  'required|email',
        //             'description'   =>  __( 'The email of the customer.' ),
        //             'type'          =>  'text',
        //         ], [
        //             'label'     =>  __( 'Password' ),
        //             'name'      =>  'password',
        //             // 'validation'    =>  'required|min:6',
        //             'description'   =>  __( 'Provide a secure provided, which is easy to remember.' ),
        //             'type'          =>  'password',
        //         ], [
        //             'label'     =>  __( 'Confirmation' ),
        //             'name'      =>  'confirmation',
        //             'validation'    =>  'same:password',
        //             'description'   =>  __( 'Please repeat the password here. This must be similar to the password.' ),
        //             'type'          =>  'password',
        //         ]
        //     ]
        // ], 
        [
            'namespace'     =>  'address',
            'title'         =>  __( 'Addresses' ),
            'description'   =>  __( 'All customers address informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'First Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_first_name',
                    'value'         =>  $address->address_first_name ?? '',
                    'type'          =>  'text'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_second_name',
                    'value'         =>  $address->address_second_name ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Street 1' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_1',
                    'value'         =>  $address->address_street_1 ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Street 2' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_2',
                    'value'         =>  $address->address_street_2 ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'City' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_city',
                    'value'         =>  $address->address_city ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Zip' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_zip',
                    'value'         =>  $address->address_zip ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'State' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_state',
                    'value'         =>  $address->address_state ?? '',
                    'type'          =>  'text',
                ], 
            ]
        ]
    ]
];