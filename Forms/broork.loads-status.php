<?php

use Tendoo\Core\Models\Role;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;

if ( ! Auth::user()->allowedTo( 'brookr.edit.loads' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

$loadService    =   app()->make( LoadsService::class );
$load           =   $loadService->get( $index );
$options        =   app()->make( Options::class );
$loadStatus     =   collect( preg_split( '/[\r\n]+/', $options->get( 'brookr_loads_status' ), NULL, PREG_SPLIT_NO_EMPTY) )->mapWithKeys( function( $name ) {
    $key        =   explode( '-', $name );
    return [ 
        Str::slug( trim( $key[0] ) )  =>  ucfirst( trim( $key[0] ) )
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