<?php

use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\DriversPayment;

if ( ! Auth::user()->allowedTo( 'brookr.see.drivers' ) ) {
    throw new Exception( __( 'You\'re not allowed to perform this action' ) );
}

$payment    =   ! empty( $index ) ? DriversPayment::find( $index ) : new stdClass;

return [
    'sections'  =>  [
        [
            'title'     =>  __( 'Payment' ),
            'namespace' =>  'driver-payments',
            'fields'    =>  [
                [
                    'type'  =>  'number',
                    'name'  =>  'amount',
                    'value' =>  $payment->amount ?? '',
                    'label' =>  __( 'Amount' ),
                    'validation'    =>  'required',
                    'description'   =>  __( 'Input the amount which should be added to the driver account' ),
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'ng-datetime',
                    'name'  =>  'created_at',
                    'value' =>  $payment->created_at ?? '',
                    'validation'    =>  'required',
                    'label' =>  __( 'Date' ),
                    'description'   =>  __( 'Define the time you want to set the payment' ),
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'textarea',
                    'name'  =>  'description',
                    'value' =>  $payment->description ?? '',
                    'label' =>  __( 'Reason (Optional)' ),
                    'description'   =>  __( 'Provide a reason for the current payment' ),
                    'appearance'    =>  'outline'
                ]
            ]
        ]
    ]
];