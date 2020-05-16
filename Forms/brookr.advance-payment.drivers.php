<?php

use Illuminate\Support\Facades\Auth;

if ( ! Auth::user()->allowedTo( 'brookr.see.drivers' ) ) {
    throw new Exception( __( 'You\'re not allowed to perform this action' ) );
}

return [
    'sections'  =>  [
        [
            'title'     =>  __( 'Payment' ),
            'namespace' =>  'driver-payments',
            'fields'    =>  [
                [
                    'type'  =>  'number',
                    'name'  =>  'amount',
                    'label' =>  __( 'Amount' ),
                    'validation'    =>  'required',
                    'description'   =>  __( 'Input the amount which should be added to the driver account' ),
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'textarea',
                    'name'  =>  'description',
                    'label' =>  __( 'Reason (Optional)' ),
                    'description'   =>  __( 'Provide a reason for the current payment' ),
                    'appearance'    =>  'outline'
                ]
            ]
        ]
    ]
];