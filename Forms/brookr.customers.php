<?php

use Illuminate\Support\Facades\Auth;

if ( ! Auth::user()->allowedTo( 'brookr.create.customers' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

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
                    'type'          =>  'text',
                    'description'   =>  __( 'the customer first name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'last_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'The customer last name.' ),
                ], [
                    'label'         =>  __( 'Displayed Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'displayed_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'The customer displayed name.' ),
                ], [
                    'label'         =>  __( 'Short Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'short_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'A short name used for the customer.' ),
                ], [
                    'label'         =>  __( 'Description' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'description',
                    'type'          =>  'textarea',
                ], 
            ]
        ], [
            'namespace'     =>  'authentication',
            'title'         =>  __( 'Authentication' ),
            'description'   =>  __( 'Every settings about authenting.' ),
            'fields'        =>  [
                [
                    'label'     =>  __( 'Username' ),
                    'name'      =>  'username',
                    'validation'    =>  'required',
                    'description'   =>  __( 'Will be used to ensure durin the authentication.' ),
                    'type'          =>  'text',
                ], [
                    'label'     =>  __( 'Email' ),
                    'name'      =>  'email',
                    'validation'    =>  'required|email',
                    'description'   =>  __( 'The email of the customer.' ),
                    'type'          =>  'text',
                ], [
                    'label'     =>  __( 'Password' ),
                    'name'      =>  'password',
                    'validation'    =>  'required|min:6',
                    'description'   =>  __( 'Provide a secure provided, which is easy to remember.' ),
                    'type'          =>  'password',
                ], [
                    'label'     =>  __( 'Confirmation' ),
                    'name'      =>  'confirmation',
                    'validation'    =>  'required|same:password',
                    'description'   =>  __( 'Please repeat the password here. This must be similar to the password.' ),
                    'type'          =>  'password',
                ]
            ]
        ], [
            'namespace'     =>  'address',
            'title'         =>  __( 'Addresses' ),
            'description'   =>  __( 'All customers address informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'First Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_first_name',
                    'type'          =>  'text'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_second_name',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Street 1' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_1',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Street 2' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_2',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'City' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_city',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Zip' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_zip',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'State' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_state',
                    'type'          =>  'text',
                ], 
            ]
        ]
    ]
];