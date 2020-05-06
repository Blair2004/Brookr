<?php

use Tendoo\Core\Models\Role;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Options;

$options    =   app()->make( Options::class );
$loadStatus     =   collect( preg_split( '/[\r\n]+/', $options->get( 'brookr_loads_status' ), NULL, PREG_SPLIT_NO_EMPTY) )->mapWithKeys( function( $name ) {
    $key        =   explode( '-', $name );
    return [ 
        Str::slug( trim( $key[0] ) )  =>  ucfirst( trim( $key[0] ) )
    ];
})->toArray();

if ( ! Auth::user()->allowedTo( 'brookr.edit.settings' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

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
                    'value' =>  $options->get( 'brookr_loads_title' ),
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
                    'name'          =>  'brookr_change_driver_deliver_loads',
                    'value' =>  $options->get( 'brookr_change_driver_deliver_loads' ),
                ], [
                    'type'          =>  'textarea',
                    'label'         =>  __( 'Loads Status' ),
                    'data'          =>  [
                        'height'    =>  '300px'
                    ],
                    'description'   =>  __( 'Enter each load status per line.' ),
                    'name'          =>  'brookr_loads_status',
                    'value' =>  $options->get( 'brookr_loads_status' ),
                ], [
                    'type'          =>  'text',
                    'label'         =>  __( 'Currency ISO/Symbol' ),
                    'description'   =>  __( 'Define what is the system currency.' ),
                    'name'          =>  'brookr_system_currency',
                    'value' =>  $options->get( 'brookr_system_currency' ),
                ], [
                    'type'          =>  'select',
                    'label'         =>  __( 'Currency Position' ),
                    'options'       =>  [
                        [
                            'label' =>  __( 'Before the amount' ),
                            'value' =>  'before'
                        ], [
                            'label' =>  __( 'After the amount' ),
                            'value' =>  'after'
                        ]
                    ],
                    'description'   =>  __( 'Where should the currency be positioned.' ),
                    'name'          =>  'brookr_system_currency_position',
                    'value' =>  $options->get( 'brookr_system_currency_position' ),
                ], [
                    'type'          =>  'select',
                    'label'         =>  __( 'Unassigned Status' ),
                    'options'       =>  Helper::kvToJsOptions( $loadStatus ),
                    'description'   =>  __( 'Select from the existing statuses which on shoudl be affected to unassigned loads.' ),
                    'name'          =>  'brookr_system_unassigned_status',
                    'value' =>  $options->get( 'brookr_system_unassigned_status' ),
                ], [
                    'type'          =>  'select',
                    'label'         =>  __( 'Status Ongoing Delivery' ),
                    'options'       =>  Helper::kvToJsOptions( $loadStatus ),
                    'description'   =>  __( 'Which status should be used when the driver is handling a load for delivery ?' ),
                    'name'          =>  'brookr_system_handling_status',
                    'value'         =>  $options->get( 'brookr_system_handling_status' ),
                ], [
                    'type'          =>  'select',
                    'label'         =>  __( 'Status Delivered Loads' ),
                    'options'       =>  Helper::kvToJsOptions( $loadStatus ),
                    'description'   =>  __( 'Which status should be used when the driver has delivered a load ?' ),
                    'name'          =>  'brookr_system_delivered_status',
                    'value'         =>  $options->get( 'brookr_system_delivered_status' ),
                ], [
                    'type'          =>  'select',
                    'label'         =>  __( 'Status Canceled Loads' ),
                    'options'       =>  Helper::kvToJsOptions( $loadStatus ),
                    'description'   =>  __( 'Which status should be used when the load delivery is canceled ?' ),
                    'name'          =>  'brookr_system_canceled_status',
                    'value'         =>  $options->get( 'brookr_system_canceled_status' ),
                ], 
            ]
        ], [
            'title'     =>  __( 'SMS Settings' ),
            'namespace' =>  'sms',
            'fields'    =>  [
                [
                    'type'          =>  'select',
                    'options'       =>  [],
                    'name'          =>  'brookr_sms_provider',
                    'value' =>  $options->get( 'brookr_sms_provider' ),
                    'label'         =>  __( 'SMS Provider' ),
                    'description'    =>  __( 'Choose the SMS provider used on the system.' ),
                ], [
                    'type'          =>  'switch',
                    'name'          =>  'brookr_enable_sms',
                    'value' =>  $options->get( 'brookr_enable_sms' ),
                    'label'         =>  __( 'Enable SMS Notifications' ),
                    'description'    =>  __( 'If checked, notification will be enabled.' ),
                ], [
                    'type'          =>  'text',
                    'name'          =>  'brookr_sms_provider_url',
                    'value' =>  $options->get( 'brookr_sms_provider_url' ),
                    'label'         =>  __( 'Provider URL/Hostname' ),
                    'description'    =>  __( 'This should be used to mention the SMS provider URL or hostname.' ),
                ], [
                    'type'          =>  'text',
                    'name'          =>  'brookr_sms_client_key',
                    'value' =>  $options->get( 'brookr_sms_client_key' ),
                    'label'         =>  __( 'Provider Client Key' ),
                    'description'    =>  __( 'This should be used to mention the SMS client key.' ),
                ], [
                    'type'          =>  'text',
                    'name'          =>  'brookr_sms_secret_key',
                    'value' =>  $options->get( 'brookr_sms_secret_key' ),
                    'label'         =>  __( 'Provider Secret Key' ),
                    'description'    =>  __( 'This should be used to mention the SMS secret key.' ),
                ]
            ]
        ], [
            'title'     =>  __( 'Email Settings' ),
            'namespace' =>  'email_notifications',
            'fields'    =>  [
                [
                    'type'          =>  'select',
                    'options'       =>  Helper::kvToJsOptions([
                        'mailgun'   =>  'Mailgun'
                    ]),
                    'name'          =>  'brookr_mail_provider',
                    'value'         =>  $options->get( 'brookr_mail_provider' ),
                    'label'         =>  __( 'Email Provider' ),
                    'description'    =>  __( 'Choose the email provider used.' ),
                ], [
                    'type'          =>  'text',
                    'name'          =>  'brookr_mail_mailgun_domain',
                    'value'         =>  $options->get( 'brookr_mail_mailgun_domain' ),
                    'label'         =>  __( 'Mailgun Domain' ),
                    'description'    =>  __( 'Save your mailgun domain.' ),
                ], [
                    'type'          =>  'text',
                    'name'          =>  'brookr_mail_mailgun_secret',
                    'value'         =>  $options->get( 'brookr_mail_mailgun_secret' ),
                    'label'         =>  __( 'Mailgun Secret' ),
                    'description'    =>  __( 'Save your mailgun secret.' ),
                ],
            ]
        ], [
            'title'     =>  __( 'Notifications' ),
            'namespace' =>  'notifications',
            'fields'    =>  [
                [
                    'type'  =>  'switch',
                    'name'  =>  'brookr_notify_driver_expiration',
                    'value' =>  $options->get( 'brookr_notify_driver_expiration' ),
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Driver Licence Expiration' ),
                    'description'    =>  __( 'Notify how many days before the driver licence expires.' ),
                ], [
                    'type'  =>  'switch',
                    'name'  =>  'brookr_notify_driver_med_expiration',
                    'value' =>  $options->get( 'brookr_notify_driver_med_expiration' ),
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Driver Medical Expiration' ),
                    'description'    =>  __( 'Notify how many days before the driver medical card expires.' ),
                ], [
                    'type'  =>  'switch',
                    'name'  =>  'brookr_notify_truck_registration_expiration',
                    'value' =>  $options->get( 'brookr_notify_truck_registration_expiration' ),
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Truck Expiration' ),
                    'description'    =>  __( 'Notify how many days before the truck registration expires.' ),
                ], [
                    'type'  =>  'switch',
                    'name'  =>  'brookr_notify_truck_registration_expiration',
                    'value' =>  $options->get( 'brookr_notify_truck_registration_expiration' ),
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Truck Insurance' ),
                    'description'    =>  __( 'Notify how many before the truck insurance expires.' ),
                ], [
                    'type'  =>  'switch',
                    'name'  =>  'brookr_notify_new_unassigned_load',
                    'value' =>  $options->get( 'brookr_notify_new_unassigned_load' ),
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Not Assigned Load' ),
                    'description'    =>  __( 'Will notify drivers when a new unassigned load is created.' ),
                ], [
                    'type'  =>  'switch',
                    'name'  =>  'brookr_notify_load_delivered',
                    'value' =>  $options->get( 'brookr_notify_load_delivered' ),
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Load Delivered' ),
                    'description'    =>  __( 'Notify the administrator when a load is delivered.' ),
                ], [
                    'type'  =>  'switch',
                    'name'  =>  'brookr_notify_load_handled',
                    'value' =>  $options->get( 'brookr_notify_load_handled' ),
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Load Handled' ),
                    'description'    =>  __( 'Notify the administrator when a load delivery is ongoing.' ),
                ]
            ]
        ], [
            'title'     =>  __( 'Developpers' ),
            'namespace' =>  'dev',
            'fields'    =>  [
                [
                    'type'  =>  'switch',
                    'name'  =>  'enable_demo',
                    'value' =>  $options->get( 'enable_demo' ),
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Enable Demo' ),
                    'description'    =>  __( 'Will create fake record on the system.' ),
                ]
            ]
        ]
    ]
];