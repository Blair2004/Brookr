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
                    'label'         =>  __( 'Drop Trailer' ),
                    'name'          =>  'drop_trailer',
                    'type'          =>  'text',
                    'description'   =>  __( 'If available, provide the drop trailer. Leave empty if not provided.' )
                ], [
                    'label'         =>  __( 'Load Trailer' ),
                    'name'          =>  'load_trailer',
                    'type'          =>  'text',
                    'validation'    =>  'required',
                    'description'   =>  __( 'Provide the load trailer reference.' )
                ], 
            ]
        ]
    ]
];