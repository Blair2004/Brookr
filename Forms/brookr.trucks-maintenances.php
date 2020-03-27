<?php

use Tendoo\Core\Facades\Helper;
use Modules\Brookr\Services\TrucksService;

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
                    'validation'    =>  'required',
                    'description'   =>  __( 'The unique name of the report.' ),
                ], [
                    'type'  =>  'select',
                    'name'  =>  'truck_id',
                    'label' =>  __( 'Truck' ),
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
                    'label' =>  __( 'Cost' ),
                    'validation'    =>  'required',
                    'description'   =>  __( 'What was the maintenance charges.' ),
                ], [
                    'type'  =>  'textarea',
                    'label' =>  __( 'Description' ),
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