<?php

use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Str;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;

$loadService    =   app()->make( LoadsService::class );
$load           =   $loadService->get( $index );
$options        =   app()->make( Options::class );
$trucksService  =   app()->make( TrucksService::class );

$trucks         =   $trucksService->getTrucks( 'available' )->map( function( $truck ) {
    return [
        'value'     =>  $truck->id,
        'label'     =>  $truck->name
    ];
})->toArray();

return [
    'sections'  =>  [
        [
            'namespace'     =>  'load',
            'title'         =>  __( 'Load Status' ),
            'description'   =>  __( 'Define options before accepting the load for delivery.' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Truck' ),
                    'name'          =>  'truck_id',
                    'value'         =>  $load->truck_id ?? '',
                    'type'          =>  'select',
                    'validation'    =>  'required',
                    'options'       =>  $trucks,
                    'description'   =>  __( 'Select the used truck for this delivery.' )
                ], 
            ]
        ]
    ]
];