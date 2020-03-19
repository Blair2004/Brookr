<?php
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
                    'description'   =>  __( 'The driver first name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'last_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver last name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Phone Cell' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'phone_cell',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver cellular phone.' ),
                ], [
                    'label'         =>  __( 'Phone Home' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'phone_home',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver home phone.' ),
                ], [
                    'label'         =>  __( 'Birth Date' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'birth_date',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                    'description'   =>  __( 'The driver home phone.' ),
                ], [
                    'label'         =>  __( 'Email' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'email',
                    'type'          =>  'text',
                    'description'   =>  __( 'the driver email.' ),
                    'validation'    =>  'email'
                ], [
                    'label'         =>  __( 'Personal ID Card' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'personal_card_url',
                    'type'          =>  'image',
                    'description'   =>  __( 'The driver personnal id Card.' ),
                    'validation'    =>  'required'
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
                    'type'          =>  'select',
                    'options'       =>  [],
                    'description'   =>  __( 'Assign the driver to an existing company.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'FEIN' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'fein',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'SSN' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'ssn',
                    'type'          =>  'text',
                    'description'   =>  __( 'The social security number.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Fuel Card' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'fuel_card',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Deduct Tools' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'deduct_tools',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Deduct Fuel' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'deduct_fuel',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Hired Since' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'work_hired_since',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Termination date' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'work_hired_since',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate'     =>  '1900',
                    ],
                    'description'   =>  __( 'When the driver has stopped working for the company.' )
                ], [
                    'label'         =>  __( 'Escrow Starting Balance' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'escrow_starting_balance',
                    'type'          =>  'number',
                ], [
                    'label'         =>  __( 'IPass' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'ipass',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Comments' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'comments',
                    'type'          =>  'textarea'
                ], [
                    'label'         =>  __( 'Status' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'status',
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
            'namespace'     =>  'notifications',
            'title'         =>  __( 'Notifications' ),
            'description'   =>  __( 'All notifications settings' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'SMS Notifications' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'sms_notifications',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Email Notifications' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'email_notifications',
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
                    'type'          =>  'image',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Medial Expiration' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'medical_card_expiration',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Drug Test' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'medical_drug_test',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], 
            ]
        ], [
            'namespace'     =>  'address',
            'title'         =>  __( 'Address' ),
            'description'   =>  __( 'All personnal address informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Address Street 1' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_1',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Address Street 2' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_2',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'City' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_city',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'State' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_state',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Zip' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_zip',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ],
            ]
        ]
    ]
];