<?php

use Tendoo\Core\Models\User;
use Tendoo\Core\Services\Helper;
use Modules\Brookr\Models\Address;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\DriversDetail;
use Modules\Brookr\Services\CompaniesService;

if ( ! Auth::user()->allowedTo( 'brookr.create.drivers' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

$driver     =   new stdClass;
$details    =   new stdClass;
$address    =   new stdClass;

if ( ! empty( $index ) ) {
    $driver     =   User::find( $index );
    $details    =   DriversDetail::where( 'driver_id', $index )->first();
    $address    =   Address::where( 'reference_type', 'driver' )
        ->where( 'reference_id', $index )
        ->first();
}

if ( $driver instanceof User && $driver->role->namespace !== 'brookr.driver' ) {
    throw new Exception( __( 'The requested user is not a driver.' ) );
}

$companiesService   =   app()->make( CompaniesService::class );
$companies          =   $companiesService->getAll();
$companiesOptions   =   Helper::toJsOptions( $companies, [ 'id', 'name' ]);

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
                    'value'         =>  $details->phone_cell ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver cellular phone.' ),
                ], [
                    'label'         =>  __( 'Phone Home' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'phone_home',
                    'value'         =>  $details->phone_home ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver home phone.' ),
                ], [
                    'label'         =>  __( 'Birth Date' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'birth_date',
                    'value'         =>  $details->birth_date ?? '',
                    'type'          =>  'ng-datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                    'description'   =>  __( 'The driver home phone.' ),
                ], [
                    'label'         =>  __( 'Personal ID Card' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'personal_card_url',
                    'type'          =>  'file-upload',
                    'data'          =>  [
                        'upload'    =>  [
                            'url'   =>  url( '/api/brookr/medias/upload' ),
                            'name'  =>  'file'
                        ]
                    ],
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
                    'name'          =>  'company_id',
                    'value'         =>  $details->company_id ?? '',
                    'type'          =>  'select',
                    'options'       =>  $companiesOptions,
                    'description'   =>  __( 'Assign the driver to an existing company.' ),
                ], [
                    'label'         =>  __( 'FEIN' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'fein',
                    'value'         =>  $details->fein ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Driver License Expiration' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'driving_license_expiration',
                    'value'         =>  $details->driving_license_expiration ?? '',
                    'type'          =>  'ng-datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                ], [
                    'label'         =>  __( 'SSN' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'ssn',
                    'value'         =>  $details->ssn ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The social security number.' ),
                ], [
                    'label'         =>  __( 'Fuel Card' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'fuel_card',
                    'value'         =>  $details->fuel_card ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Deduct Tools' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'deduct_tools',
                    'value'         =>  $details->deduct_tools ?? '',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Deduct Fuel' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'deduct_fuel',
                    'value'         =>  $details->deduct_fuel ?? '',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Hired Since' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'work_hired_date',
                    'value'         =>  $details->work_hired_date ?? '',
                    'type'          =>  'ng-datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                ], [
                    'label'         =>  __( 'Termination date' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'work_terminated_date',
                    'value'         =>  $details->work_terminated_date ?? '',
                    'type'          =>  'ng-datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                    'description'   =>  __( 'When the driver has stopped working for the company.' )
                ], [
                    'label'         =>  __( 'Escrow Starting Balance' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'escrow_starting_balance',
                    'value'         =>  $details->escrow_starting_balance ?? '',
                    'type'          =>  'number',
                ], [
                    'label'         =>  __( 'IPass' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'ipass',
                    'value'         =>  $details->ipass ?? '',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Comments' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'comments',
                    'value'         =>  $details->comments ?? '',
                    'type'          =>  'textarea'
                ], [
                    'label'         =>  __( 'Status' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'status',
                    'value'         =>  $details->status ?? '',
                    'type'          =>  'select',
                    'options'       =>  [
                        [
                            'label'     =>  __( 'Available' ),
                            'value'     =>  'unassigned',
                        ], [
                            'label'     =>  __( 'Unavailable' ),
                            'value'     =>  'unavailable',
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
                    'description'   =>  __( 'Might be used during the authentication.' ),
                    'validation'    =>  'email',
                    'validation'    =>  'required',
                ], [
                    'label'         =>  __( 'Password' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'password',
                    'type'          =>  'text',
                    'description'   =>  __( 'This will use used for authentication.' ),
                    'validation'    =>  'min:6'
                ], [
                    'label'         =>  __( 'Confirmation' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'password_confirm',
                    'type'          =>  'text',
                    'description'   =>  __( 'Should match the password.' ),
                    'validation'    =>  'same:password'
                ], [
                    'label'         =>  __( 'Active' ),
                    'appearance'    =>  'outline',
                    'description'   =>  __( 'Determine wether the driver can log in or not' ),
                    'name'          =>  'active',
                    'value'         =>  @(( bool ) $driver->active ) ?? false,
                    'type'          =>  'switch',
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
                    'type'          =>  'file-upload',
                    'data'          =>  [
                        'upload'    =>  [
                            'url'   =>  url( '/api/brookr/medias/upload' ),
                            'name'  =>  'file'
                        ]
                    ],
                ], [
                    'label'         =>  __( 'Medial Expiration' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'medical_card_expiration',
                    'value'         =>  $details->medical_card_expiration ?? '',
                    'type'          =>  'ng-datetime',
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