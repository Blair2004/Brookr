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
                    'name'          =>  'first_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver first name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'name'          =>  'last_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver last name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Phone Cell' ),
                    'name'          =>  'phone_cell',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver cellular phone.' ),
                ], [
                    'label'         =>  __( 'Phone Home' ),
                    'name'          =>  'phone_home',
                    'type'          =>  'text',
                    'description'   =>  __( 'The driver home phone.' ),
                ], [
                    'label'         =>  __( 'Birth Date' ),
                    'name'          =>  'birth_date',
                    'type'          =>  'date',
                    'description'   =>  __( 'The driver home phone.' ),
                ], [
                    'label'         =>  __( 'Email' ),
                    'name'          =>  'email',
                    'type'          =>  'text',
                    'description'   =>  __( 'the driver email.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Personal ID Card' ),
                    'name'          =>  'personal_card_url',
                    'type'          =>  'file',
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
                    'name'          =>  'ssn',
                    'type'          =>  'select',
                    'options'       =>  [],
                    'description'   =>  __( 'Assign the driver to an existing company.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'FEIN' ),
                    'name'          =>  'fein',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'SSN' ),
                    'name'          =>  'ssn',
                    'type'          =>  'text',
                    'description'   =>  __( 'The social security number.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Fuel Card' ),
                    'name'          =>  'fuel_card',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Hired Since' ),
                    'name'          =>  'work_hired_since',
                    'type'          =>  'datetime',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Termination date' ),
                    'name'          =>  'work_hired_since',
                    'type'          =>  'datetime',
                    'description'   =>  __( 'When the driver has stopped working for the company.' )
                ], [
                    'label'         =>  __( 'Escrow Starting Balance' ),
                    'name'          =>  'escrow_starting_balance',
                    'type'          =>  'number',
                ], [
                    'label'         =>  __( 'IPass' ),
                    'name'          =>  'ipass',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Comments' ),
                    'name'          =>  'comments',
                    'type'          =>  'textarea',
                    'validation'    =>  'required'
                ],
            ]
        ], [
            'namespace'     =>  'professional',
            'title'         =>  __( 'Professional' ),
            'description'   =>  __( 'All professional informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Company' ),
                    'name'          =>  'company_driver',
                    'type'          =>  'select',
                    'options'       =>  [],
                    'description'   =>  __( 'Assign the driver to an existing company.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'FEIN' ),
                    'name'          =>  'fein',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'SSN' ),
                    'name'          =>  'ssn',
                    'type'          =>  'text',
                    'description'   =>  __( 'The social security number.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Fuel Card' ),
                    'name'          =>  'fuel_card',
                    'type'          =>  'text',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Deduct Tools' ),
                    'name'          =>  'deduct_tools',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Deduct Fuel' ),
                    'name'          =>  'deduct_fuel',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'SMS Notifications' ),
                    'name'          =>  'sms_notifications',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Email Notifications' ),
                    'name'          =>  'email_notifications',
                    'type'          =>  'switch',
                ], [
                    'label'         =>  __( 'Status' ),
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
            'namespace'     =>  'medical',
            'title'         =>  __( 'Medical' ),
            'description'   =>  __( 'All medical informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Medical Card' ),
                    'name'          =>  'medical_card_url',
                    'type'          =>  'file',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Medial Expiration' ),
                    'name'          =>  'medical_card_expiration',
                    'type'          =>  'file',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Drug Test' ),
                    'name'          =>  'medical_drug_test',
                    'type'          =>  'file',
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
                    'name'          =>  'address_street_1',
                    'type'          =>  'file',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Address Street 2' ),
                    'name'          =>  'address_street_2',
                    'type'          =>  'file',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'City' ),
                    'name'          =>  'address_city',
                    'type'          =>  'file',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'State' ),
                    'name'          =>  'address_state',
                    'type'          =>  'file',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Zip' ),
                    'name'          =>  'address_zip',
                    'type'          =>  'file',
                    'validation'    =>  'required'
                ],
            ]
        ]
    ]
];