<?php

use Tendoo\Core\Models\Role;
use Modules\Brookr\Models\Truck;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\Customer;
use Modules\Brookr\Services\TrucksService;

if ( ! Auth::user()->allowedTo( 'brookr.create.loads' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

$load       =   new stdClass;
if ( ! empty( $index ) ) {
    $load   =   LoadDelivery::find( $index );
}

$rawCustomers   =   Customer::get()->filter( function( $customer ) {
        return $customer->details !== null;
    })->map( function( $customer ) {
        $customer->fullname     =   $customer->details ? $customer->details->first_name . ' ' . $customer->details->last_name : $customer->username;
        return $customer;
});
// var_dump( $rawCustomers );
$customers      =   Helper::toJsOptions( $rawCustomers, [ 'id', 'fullname' ]);
$rawDrivers     =   Role::namespace( 'brookr.driver' )->users;
$drivers        =   Helper::toJsOptions( $rawDrivers, [ 'id', 'username' ]);
$trucksService  =   new TrucksService;
$trucks         =   Helper::toJsOptions( ! empty( $index ) ? $trucksService->getTrucks( 'all' ) : $trucksService->getTrucks( 'available' ), [ 'id', [ 'name', 'model' ], ' - ' ] );

$options        =   app()->make( Options::class );
$loadStatus     =   collect( preg_split( '/[\r\n]+/', $options->get( 'brookr_loads_status' ), NULL, PREG_SPLIT_NO_EMPTY) )->mapWithKeys( function( $name ) {
    $key        =   explode( '-', $name );
    return [ 
        Str::slug( trim( $key[0] ) )  =>  ucfirst( trim( $key[0] ) )
    ];
});

return [
    'sections'      =>      [
        [
            'namespace'     =>  'main',
            'title'         =>  __( 'Main' ),
            'description'   =>  __( 'Loads main informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Loads Name' ),
                    'name'          =>  'name',
                    'type'          =>  'text',
                    'value'         =>  $load->name ?? '',
                    'description'   =>  __( 'This can be automatically be generated.' ),
                ], 
            ]
        ], [
            'namespace'     =>  'general',
            'title'         =>  __( 'General Details' ),
            'description'   =>  __( 'Loads general details.' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Brooker' ),
                    'name'          =>  'brooker_id',
                    'value'         =>  $load->brooker_id ?? '',
                    'type'          =>  'select',
                    'options'       =>  $customers,
                    'description'   =>  __( 'The brooker providing the load.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Trailer Reference' ),
                    'name'          =>  'trailer_reference',
                    'value'         =>  $load->trailer_reference ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The trailer reference.' )
                ], [
                    'label'         =>  __( 'Load Reference' ),
                    'name'          =>  'load_reference',
                    'value'         =>  $load->load_reference ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The load reference.' )
                ], [
                    'label'         =>  __( 'Pickup Reference' ),
                    'name'          =>  'pickup_reference',
                    'value'         =>  $load->pickup_reference ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The pickup reference.' )
                ], [
                    'label'         =>  __( 'Empty Trailer' ),
                    'name'          =>  'empty_trailer',
                    'value'         =>  $load->empty_trailer ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The empty trailer reference.' )
                ], [
                    'label'         =>  __( 'Load Trailer' ),
                    'name'          =>  'load_trailer',
                    'value'         =>  $load->load_trailer ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The load trailer reference.' )
                ], [
                    'label'         =>  __( 'Drop Trailer' ),
                    'name'          =>  'drop_trailer',
                    'value'         =>  $load->drop_trailer ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'The drop trailer reference.' )
                ], [
                    'label'         =>  __( 'Rate' ),
                    'name'          =>  'cost',
                    'value'         =>  $load->cost ?? '',
                    'type'          =>  'number',
                     'description'   =>  __( 'The actual cost of the transport.' )
                ], [
                    'label'         =>  __( 'Note' ),
                    'name'          =>  'note',
                    'value'         =>  $load->cost ?? '',
                    'type'          =>  'textarea',
                     'description'   =>  __( 'The note of the load delivery.' )
                ], [
                    'label'         =>  __( 'Status' ),
                    'name'          =>  'status',
                    'value'         =>  $load->status ?? '',
                    'type'          =>  'select',
                    'options'       =>  Helper::kvToJsOptions( $loadStatus ),
                    'description'   =>  __( 'The delivery load status.' )
                ], [
                    'label'         =>  __( 'Pickup Date' ),
                    'name'          =>  'pickup_date',
                    'value'         =>  $load->pickup_date ?? '',
                    'type'          =>  'ng-datetime',
                    'data'          =>  [
                        'startDate' =>  1990
                    ],
                    'description'   =>  __( 'When the loads should be picked up by the driver.' ),
                ], [
                    'label'         =>  __( 'Delivery Date' ),
                    'name'          =>  'delivery_date',
                    'value'         =>  $load->delivery_date ?? '',
                    'type'          =>  'ng-datetime',
                    'data'          =>  [
                        'startDate' =>  1990
                    ],
                    'description'   =>  __( 'When the loads should be delivered.' ),
                ], [
                    'label'         =>  __( 'Pickup City' ),
                    'name'          =>  'pickup_city',
                    'value'         =>  $load->pickup_city ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'When the loads should be picked up by the driver.' ),
                ], [
                    'label'         =>  __( 'Delivery City' ),
                    'name'          =>  'delivery_city',
                    'value'         =>  $load->delivery_city ?? '',
                    'type'          =>  'text',
                    'description'   =>  __( 'Might be empty and will automatically be filled on a driver action.' )
                ], [
                    'label'         =>  __( 'delivery Document' ),
                    'name'          =>  'delivery_document_url',
                    'value'         =>  $load->delivery_document_url ?? '',
                    'type'          =>  'file-upload',
                    'data'          =>  [
                        'maintainAspectRatio'   =>  false
                    ],
                    'description'   =>  __( 'Might be empty and will automatically be filled on a driver action.' )
                ], [
                    'label'         =>  __( 'Rate Document URL' ),
                    'name'          =>  'rate_document_url',
                    'type'          =>  'file-upload',
                    'data'          =>  [
                        'maintainAspectRatio'   =>  false
                    ]
                ], [
                    'label'         =>  __( 'Publicly Visible' ),
                    'name'          =>  'visible',
                    'description'   =>  __( 'If is publicly visible, any available driver could self-assign to the load delivery.' ),
                    'value'         =>  $load->visible ?? false,
                    'type'          =>  'switch',
                ], 
            ]
        ], [
            'namespace'     =>  'drivers',
            'title'         =>  __( 'Drivers Details' ),
            'description'   =>  __( 'All details for the assigned driver' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Driver' ),
                    'name'          =>  'driver_id',
                    'value'         =>  $load->driver_id ?? '',
                    'type'          =>  'select',
                    'options'       =>  $drivers,
                    'description'   =>  __( 'Assigned driver can be empty. Unassigned loads can be handled by available drivers.' )
                ], [
                    'label'         =>  __( 'Truck Assigned' ),
                    'name'          =>  'truck_id',
                    'value'         =>  $load->truck_id ?? '',
                    'type'          =>  'select',
                    'options'       =>  $trucks,
                    'description'   =>  __( 'Might be empty and will automatically be filled on a driver action.' )
                ], [
                    'label'         =>  __( 'Escort Fees' ),
                    'name'          =>  'escort_fees',
                    'value'         =>  $load->escort_fees ?? '',
                    'type'          =>  'number',
                    'description'   =>  __( 'The actual escort fees if provided.' )
                ], [
                    'label'         =>  __( 'Lumper Fees' ),
                    'name'          =>  'lumper_fees',
                    'value'         =>  $load->lumper_fees ?? '',
                    'type'          =>  'number',
                    'description'   =>  __( 'The actual lumper fees if provided.' )
                ],
            ]
        ], 
        // [
        //     'namespace'     =>  'pickup_delivery',
        //     'title'         =>  __( 'Pickup & Delivery' ),
        //     'description'   =>  __( 'All details about pickup and delivery' ),
        //     'fields'        =>  [
                
        //     ]
        // ]
    ]
];