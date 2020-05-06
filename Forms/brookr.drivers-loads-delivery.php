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
                    'label'         =>  __( 'Delivery Document' ),
                    'name'          =>  'delivery_document_url',
                    'type'          =>  'file',
                    'validation'    =>  'required',
                    'description'   =>  __( 'select and attach delivery document to the delivery.' )
                ], 
            ]
        ]
    ]
];