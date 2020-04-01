<?php

use Tendoo\Core\Models\Role;
use Modules\Brookr\Models\Truck;
use Tendoo\Core\Services\Helper;
use Modules\Brookr\Services\TrucksService;

$rawCustomers   =   Role::namespace( 'brookr.customer' )->users;
$customers      =   Helper::toJsOptions( $rawCustomers, [ 'id', 'username' ]);
$rawDrivers     =   Role::namespace( 'brookr.driver' )->users;
$drivers        =   Helper::toJsOptions( $rawDrivers, [ 'id', 'username' ]);
$trucksService  =   new TrucksService;
$trucks         =   Helper::toJsOptions( $trucksService->getTrucks( 'available' ), [ 'id', 'name' ]);

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
                    'description'   =>  __( 'This can be automatically be generated.' ),
                    'validation'    =>  'required'
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
                    'type'          =>  'select',
                    'options'       =>  $customers,
                    'description'   =>  __( 'The brooker providing the load.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Trailer Reference' ),
                    'name'          =>  'trailer_reference',
                    'type'          =>  'text',
                    'description'   =>  __( 'The trailer reference.' )
                ], [
                    'label'         =>  __( 'Load Reference' ),
                    'name'          =>  'load_reference',
                    'type'          =>  'text',
                    'description'   =>  __( 'The load reference.' )
                ], [
                    'label'         =>  __( 'Pickup Reference' ),
                    'name'          =>  'pickup_reference',
                    'type'          =>  'text',
                    'description'   =>  __( 'The pickup reference.' )
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
                    'type'          =>  'select',
                    'options'       =>  $drivers,
                    'description'   =>  __( 'Assigned driver can be empty. Unassigned loads can be handled by available drivers.' )
                ], [
                    'label'         =>  __( 'Truck Assigned' ),
                    'name'          =>  'truck_id',
                    'type'          =>  'select',
                    'options'       =>  $trucks,
                    'description'   =>  __( 'Might be empty and will automatically be filled on a driver action.' )
                ], [
                    'label'         =>  __( 'Rate' ),
                    'name'          =>  'cost',
                    'type'          =>  'number',
                    'validation'    =>  'required',
                    'description'   =>  __( 'The actual cost of the transport.' )
                ], [
                    'label'         =>  __( 'Rate Document URL' ),
                    'name'          =>  'rate_document_url',
                    'type'          =>  'image',
                ], 
            ]
        ], [
            'namespace'     =>  'pickup_delivery',
            'title'         =>  __( 'Pickup & Delivery' ),
            'description'   =>  __( 'All details about pickup and delivery' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Pickup Date' ),
                    'name'          =>  'pickup_date',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate' =>  1990
                    ],
                    'description'   =>  __( 'When the loads should be picked up by the driver.' ),
                ], [
                    'label'         =>  __( 'Delivery Date' ),
                    'name'          =>  'delivery_date',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate' =>  1990
                    ],
                    'description'   =>  __( 'When the loads should be delivered.' ),
                ], [
                    'label'         =>  __( 'Pickup City' ),
                    'name'          =>  'pickup_city',
                    'type'          =>  'text',
                    'description'   =>  __( 'When the loads should be picked up by the driver.' ),
                ], [
                    'label'         =>  __( 'Delivery City' ),
                    'name'          =>  'delivery_city',
                    'type'          =>  'text',
                    'description'   =>  __( 'Might be empty and will automatically be filled on a driver action.' )
                ], [
                    'label'         =>  __( 'delivery Document' ),
                    'name'          =>  'delivery_document_url',
                    'type'          =>  'image',
                    'description'   =>  __( 'Might be empty and will automatically be filled on a driver action.' )
                ], 
            ]
        ]
    ]
];