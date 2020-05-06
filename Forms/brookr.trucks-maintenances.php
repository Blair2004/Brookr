<?php

use Tendoo\Core\Facades\Helper;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Models\TruckMaintenance;

if ( ! Auth::user()->allowedTo( 'brookr.create.trucks-relatives' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

$truckMaintenance          =   new stdClass;
if ( ! empty( $index ) ) {
    $truckMaintenance      =   TruckMaintenance::find( $index );
}

return [
    'sections'  =>  [
        [
            'title'     =>     __( 'General' ),
            'namespace' =>  'general',
            'fields'    =>  [
                [
                    'type'  =>  'text',
                    'name'  =>  'name',
                    'appearance'    =>  'outline',
                    'label' =>  __( 'Name' ),
                    'value'         =>  $truckMaintenance->name ?? '',
                    'validation'    =>  'required',
                    'description'   =>  __( 'The unique name of the report.' ),
                ], [
                    'type'  =>  'select',
                    'name'  =>  'truck_id',
                    'label' =>  __( 'Truck' ),
                    'value'         =>  $truckMaintenance->truck_id ?? '',
                    'validation'    =>  'required',
                    'description'   =>  __( 'Assign the report to an existing truck.' ),
                    'options'   =>  Helper::toJsOptions(
                        ( new TrucksService )->getTrucks(),
                        [ 'id', 'name' ]
                    )
                ], [
                    'type'  =>  'number',
                    'name'  =>  'cost',
                    'appearance'    =>  'outline',
                    'value'         =>  $truckMaintenance->cost ?? '',
                    'label' =>  __( 'Cost' ),
                    'validation'    =>  'required',
                    'description'   =>  __( 'What was the maintenance charges.' ),
                ], [
                    'type'  =>  'textarea',
                    'label' =>  __( 'Description' ),
                    'value'         =>  $truckMaintenance->description ?? '',
                    'name'  =>  'description',
                    'appearance'    =>  'outline',
                    'description'   =>  __( 'A description for the report.' ),
                ], [
                    'type'  =>  'image',
                    'name'  =>  'document_url',
                    'description'   =>  __( 'A reference/receipt of the maintenance.' ),
                    'label' =>  __( 'Reference' ),
                ]
            ] 
        ]
    ]
];