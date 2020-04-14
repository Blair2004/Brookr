<?php

use Tendoo\Core\Models\Role;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Options;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;

$loadService    =   app()->make( LoadsService::class );
$load           =   $loadService->get( $index );
$options        =   app()->make( Options::class );
$loadStatus     =   collect( preg_split( '/[\r\n]+/', $options->get( 'brookr_loads_status' ), NULL, PREG_SPLIT_NO_EMPTY) )->mapWithKeys( function( $name ) {
    return [ 
        Str::slug( $name )  =>  ucfirst( $name )
    ];
});

return [
    'sections'  =>  [
        [
            'namespace'     =>  'load',
            'title'         =>  __( 'Load Status' ),
            'description'   =>  __( 'Change the load status' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Status' ),
                    'name'          =>  'status',
                    'value'         =>  $load->status ?? '',
                    'type'          =>  'select',
                    'validation'    =>  'required',
                    'options'       =>  Helper::kvToJsOptions( $loadStatus ),
                    'description'   =>  __( 'Change the load status.' )
                ], 
            ]
        ]
    ]
];