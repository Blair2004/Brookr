<?php

use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\Location;

if ( ! Auth::user()->allowedTo( 'brookr.create.loads' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

$load       =   new stdClass;
if ( ! empty( $index ) ) {
    $load   =   Location::find( $index );
}

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
                    'description'   =>  __( 'Name of the location.' ),
                ], 
            ]
        ], [
            'namespace'     =>  'general',
            'title'         =>  __( 'General Details' ),
            'description'   =>  __( 'Loads general details.' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Description' ),
                    'name'          =>  'description',
                    'value'         =>  $load->description ?? '',
                    'type'          =>  'textarea',
                    'description'   =>  __( 'more details about the location.' ),
                ], 
            ]
        ], 
    ]
];