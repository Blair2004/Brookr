<?php

return [
    'sections'  =>  [
        [
            'title' =>  __( 'General' ),
            'namespace' =>  'general',
            'fields'    =>  [
                [
                    'type'          =>  'text',
                    'label'         =>  __( 'Load Title' ),
                    'description'   =>  __( 'Determine how loads delivery name shoud be automatically defined. Use {date} or {id} to display the date or the load id. Example : "Delivery {id} - {date}".' ),
                    'name'          =>  'brookr_loads_title',
                ], [
                    'type'          =>  'select',
                    'options'       =>  [
                        [
                            'value' =>  'no',
                            'label' =>  __( 'No' )
                        ], [
                            'value' =>  'yes',
                            'label' =>  __( 'Yes' )
                        ]
                    ],
                    'label'         =>  __( 'Change Driver On Delivered Loads' ),
                    'description'   =>  __( 'Define wether it should be possible to change the driver once a load has been delivered.' ),
                    'name'          =>  'brookr_loads_title',
                ]
            ]
        ], [
            'title'     =>  __( 'SMS Settings' ),
            'namespace' =>  'sms',
            'fields'    =>  [
                [
                    'type'          =>  'select',
                    'options'       =>  [],
                    'name'          =>  'brookr_sms_provider',
                    'label'         =>  __( 'SMS Provider' ),
                    'description'    =>  __( 'Choose the SMS provider used on the system.' ),
                ], [
                    'type'          =>  'switch',
                    'name'          =>  'brookr_enable_sms',
                    'label'         =>  __( 'Enable SMS Notifications' ),
                    'description'    =>  __( 'If checked, notification will be enabled.' ),
                ], [
                    'type'          =>  'text',
                    'name'          =>  'brookr_sms_provider_url',
                    'label'         =>  __( 'Provider URL/Hostname' ),
                    'description'    =>  __( 'This should be used to mention the SMS provider URL or hostname.' ),
                ], [
                    'type'          =>  'text',
                    'name'          =>  'brookr_sms_client_key',
                    'label'         =>  __( 'Provider Client Key' ),
                    'description'    =>  __( 'This should be used to mention the SMS client key.' ),
                ], [
                    'type'          =>  'text',
                    'name'          =>  'brookr_sms_secret_key',
                    'label'         =>  __( 'Provider Secret Key' ),
                    'description'    =>  __( 'This should be used to mention the SMS secret key.' ),
                ]
            ]
        ], [
            'title'     =>  __( 'Developpers' ),
            'namespace' =>  'dev',
            'fields'    =>  [
                [
                    'type'  =>  'switch',
                    'name'  =>  'enable_demo',
                    'label' =>  __( 'Enable Demo' ),
                    'descrition'    =>  __( 'Will create fake record on the system.' ),
                ]
            ]
        ]
    ]
];