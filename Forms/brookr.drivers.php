<?php

use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Address;
use Modules\Brookr\Models\DriverDetail;

$driver     =   new stdClass;
$details    =   new stdClass;
$address    =   new stdClass;

if ( ! empty( $index ) ) {
    $driver     =   User::find( $index );
    $details    =   DriverDetail::where( 'driver_id', $index )->first();
    $address    =   Address::where( 'reference_type', 'driver' )
        ->where( 'reference_id', $index )
        ->first();
}

if ( $driver instanceof User && $driver->role->namespace !== 'brookr.driver' ) {
    throw new Exception( __( 'The requested user is not a driver.' ) );
}

return [
    'sections'      =>      [
        [
            'namespace'     =>  'personnal',
            'title'         =>  __( 'Personnal' ),
            'description'   =>  __( 'All personnal drivers informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'First Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'first_name',
                    'type'          =>  'text',
                    'value'         =>  $details->first_name ?? '',
                    'description'   =>  __( 'The driver first name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'last_name',
                    'value'         =>  $details->last_name ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver last name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Phone Cell' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'phone_cell',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver cellular phone.' ),
                ], [
                    'label'         =>  __( 'Phone Home' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'phone_home',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver home phone.' ),
                ], [
                    'label'         =>  __( 'Birth Date' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'birth_date',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                    'description'   =>  __( 'The driver home phone.' ),
                ], [
                    'label'         =>  __( 'Personal ID Card' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'personal_card_url',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'image',
                    'description'   =>  __( 'The driver personnal id Card.' ),
                ], 
            ]
        ], [
            'namespace'     =>  'professional',
            'title'         =>  __( 'Professional' ),
            'description'   =>  __( 'All personnal drivers informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Company' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'company_driver',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'select',
                    'options'       =>  [],
                    'description'   =>  __( 'Assign the driver to an existing company.' ),
                ], [
                    'label'         =>  __( 'FEIN' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'fein',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'SSN' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'ssn',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The social security number.' ),
                ], [
                    'label'         =>  __( 'Fuel Card' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'fuel_card',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Deduct Tools' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'deduct_tools',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Deduct Fuel' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'deduct_fuel',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Hired Since' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'work_hired_date',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                ], [
                    'label'         =>  __( 'Termination date' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'work_terminated_date',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                    'description'   =>  __( 'When the driver has stopped working for the company.' )
                ], [
                    'label'         =>  __( 'Escrow Starting Balance' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'escrow_starting_balance',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'number',
                ], [
                    'label'         =>  __( 'IPass' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'ipass',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Comments' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'comments',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'textarea'
                ], [
                    'label'         =>  __( 'Status' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'status',
                    'value'         =>  $details->first_name ?? '',
                    'type'          =>  'select',
                    'options'       =>  [
                        [
                            'label'     =>  __( 'Active' ),
                            'value'     =>  'active',
                        ], [
                            'label'     =>  __( 'Unactive' ),
                            'value'     =>  'unactive',
                        ]
                    ]
                ]
            ]
        ], [
            'namespace'     =>  'authentication',
            'title'         =>  __( 'Authentication' ),
            'description'   =>  __( 'Everything about authentication.' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Username' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'username',
                    'value'         =>  $driver->username ?? '',
                    'type'          =>  'text',
                    'readonly'      =>  $index !== null,
                    'description'   =>  __( 'The username used during the authentication.' ),
                    'validation'    =>  'required|min:3'
                ], [
                    'label'         =>  __( 'Email' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'email',
                    'value'         =>  $driver->email ?? '',
                    'type'          =>  'text',
                    'readonly'      =>  $index !== null,
                    'description'   =>  __( 'Might be used during the authentication.' ),
                    'validation'    =>  'email',
                    'validation'    =>  'required',
                ], [
                    'label'         =>  __( 'Password' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'password',
                    'type'          =>  'password',
                    'description'   =>  __( 'This will use used for authentication.' ),
                    'validation'    =>  'min:6'
                ], [
                    'label'         =>  __( 'Confirmation' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'password_confirm',
                    'type'          =>  'password',
                    'description'   =>  __( 'Should match the password.' ),
                    'validation'    =>  'same:password'
                ]
            ]
        ], [
            'namespace'     =>  'notifications',
            'title'         =>  __( 'Notifications' ),
            'description'   =>  __( 'All notifications settings' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'SMS Notifications' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'sms_notifications',
                    'value'         =>  @(( bool ) $details->sms_notifications) ?? false,
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Email Notifications' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'email_notifications',
                    'value'         =>  @(( bool ) $details->email_notifications) ?? false,
                    'type'          =>  'switch',
                ], 
            ]
        ], [
            'namespace'     =>  'medical',
            'title'         =>  __( 'Medical' ),
            'description'   =>  __( 'All medical informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Medical Card' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'medical_card_url',
                    'value'         =>  $details->medical_card_url ?? '',
                    'type'          =>  'image',
                ], [
                    'label'         =>  __( 'Medial Expiration' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'medical_card_expiration',
                    'value'         =>  $details->medical_card_expiration ?? '',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                ], [
                    'label'         =>  __( 'Drug Test' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'medical_drug_test',
                    'value'         =>  $details->medical_drug_test ?? '',
                    'type'          =>  'text'                
                ], 
            ]
        ], [
            'namespace'     =>  'address',
            'title'         =>  __( 'Address' ),
            'description'   =>  __( 'All personnal address informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Address First Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_first_name',
                    'value'         =>  $address->address_first_name ?? '',
                    'type'          =>  'text',
                ],[
                    'label'         =>  __( 'Address Second Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_second_name',
                    'value'         =>  $address->address_second_name ?? '',
                    'type'          =>  'text',
                ],[
                    'label'         =>  __( 'Address Street 1' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_1',
                    'value'         =>  $address->address_street_1 ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Address Street 2' ),
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
                    'label'         =>  __( 'State' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_state',
                    'value'         =>  $address->address_state ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Zip' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_zip',
                    'value'         =>  $address->address_zip ?? '',
                    'type'          =>  'text',
                ],
            ]
        ]
    ]
];