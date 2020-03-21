<?php
return [
    'sections'      =>      [
        [
            'namespace'     =>  'general',
            'title'         =>  __( 'General' ),
            'description'   =>  __( 'all general informations about the truck' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Name' ),
                    'name'          =>  'name',
                    'type'          =>  'text',
                    'description'   =>  __( 'the truck brand name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Model' ),
                    'name'          =>  'model',
                    'type'          =>  'text',
                    'description'   =>  __( 'The truck model name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Year' ),
                    'name'          =>  'year',
                    'type'          =>  'text',
                    'description'   =>  __( 'when the truck has been commercialized for the first time.' ),
                ], [
                    'label'         =>  __( 'Color' ),
                    'name'          =>  'color',
                    'type'          =>  'text',
                    'description'   =>  __( 'The color of the truck.' ),
                ], [
                    'label'         =>  __( 'Preview' ),
                    'name'          =>  'thumbnail',
                    'type'          =>  'image',
                    'description'   =>  __( 'A quick preview of the truck.' ),
                ], [
                    'label'         =>  __( 'Description' ),
                    'name'          =>  'description',
                    'type'          =>  'textarea',
                ], [
                    'label'         =>  __( 'Status' ),
                    'name'          =>  'status',
                    'type'          =>  'switch',
                    'validation'    =>  'required',
                    'description'   =>  __( 'Define wether the truck is available or not.')
                ]
            ]
        ], [
            'namespace'     =>  'company',
            'title'         =>  __( 'Company Details' ),
            'description'   =>  __( 'A company related details' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'Licence Number' ),
                    'name'          =>  'license_number',
                    'type'          =>  'text',
                    'description'   =>  __( 'Assign the driver to an existing company.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Vin Number' ),
                    'name'          =>  'vin_number',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Purchase Date' ),
                    'name'          =>  'purchase_date',
                    'type'          =>  'text',
                    'description'   =>  __( 'When the truc has been purchased.' ),
                ], [
                    'label'         =>  __( 'Purchase Mileage' ),
                    'name'          =>  'purchase_mileage',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Purchase Price' ),
                    'name'          =>  'purchase_price',
                    'type'          =>  'number',
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Truck Number' ),
                    'name'          =>  'truck_number',
                    'type'          =>  'text',
                    'description'   =>  __( 'The reference number for the truck.' )
                ], [
                    'label'         =>  __( 'Sold Date' ),
                    'name'          =>  'sold_date',
                    'type'          =>  'datetime',
                    'data'          =>  [
                        'startDate' =>  1990
                    ]
                ], [
                    'label'         =>  __( 'Sold Mileage' ),
                    'name'          =>  'sold_mileage',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Sold Price' ),
                    'name'          =>  'sold_price',
                    'type'          =>  'text',
                ],
            ]
        ]
    ]
];