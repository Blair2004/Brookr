<?php

use Tendoo\Core\Models\Role;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;

return [
    'sections'  =>  [
        [
            'namespace'     =>  'load',
            'title'         =>  __( 'Load Status' ),
            'description'   =>  __( 'Upload Delivery Document' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Empty Trailer' ),
                    'name'          =>  'empty_trailer',
                    'type'          =>  'text',
                    'appearance'    =>  'outline',
                    'validation'    =>  'required',
                    'description'   =>  __( 'Provide the empty trailer reference.' )
                ], [
                    'label'         =>  __( 'Shipper Arrival Time' ),
                    'name'          =>  'shipper_arrival_time',
                    'type'          =>  'text',
                    'appearance'    =>  'outline',
                    'validation'    =>  'required',
                    'description'   =>  __( 'Define the shipper arrival time.' )
                ], [
                    'label'         =>  __( 'Depart Time' ),
                    'name'          =>  'depart_time',
                    'type'          =>  'text',
                    'appearance'    =>  'outline',
                    'validation'    =>  'required',
                    'description'   =>  __( 'Define your depart time.' )
                ], [
                    'label'         =>  __( 'Receiver Arrival Time' ),
                    'name'          =>  'receiver_arrival_time',
                    'type'          =>  'text',
                    'appearance'    =>  'outline',
                    'validation'    =>  'required',
                    'description'   =>  __( 'Define the receive arrival time.' )
                ], 
                [
                    'label'         =>  __( 'Delivery Document' ),
                    'name'          =>  'delivery_document_url',
                    'type'          =>  'file-upload',
                    'validation'    =>  'required',
                    'description'   =>  __( 'select and attach delivery document to the delivery.' )
                ],                 
            ]
        ]
    ]
];