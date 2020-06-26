<?php

use Tendoo\Core\Models\Role;
use Tendoo\Core\Services\Helper;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;

if ( ! Auth::user()->allowedTo( 'brookr.see.drivers' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

$rawDrivers     =   Role::namespace( 'brookr.driver' )->users;
$drivers        =   Helper::toJsOptions( $rawDrivers, [ 'id', 'username' ]);
$loadService    =   app()->make( LoadsService::class );
$load           =   $loadService->get( $index );
$trucksService  =   new TrucksService;
$trucks         =   Helper::toJsOptions( $trucksService->getTrucks( 'all' ), [ 'id', [ 'name', 'model' ], ' - ' ] );

return [
    'sections'  =>  [
        [
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
                    'label'         =>  __( 'Rate' ),
                    'name'          =>  'cost',
                    'value'         =>  $load->cost ?? '',
                    'type'          =>  'number',
                    'description'   =>  __( 'The actual cost of the transport.' )
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
                ], [
                    'label'         =>  __( 'Detention Fees' ),
                    'name'          =>  'detention_fees',
                    'value'         =>  $load->detention_fees ?? '',
                    'type'          =>  'number',
                    'description'   =>  __( 'The actual detention fees if provided.' )
                ],
            ]
        ]
    ]
];