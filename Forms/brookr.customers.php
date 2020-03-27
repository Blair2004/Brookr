<?php
return [
    'sections'      =>      [
        [
            'namespace'     =>  'general',
            'title'         =>  __( 'General' ),
            'description'   =>  __( 'all general informations about the truck' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'First Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'first_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'the customer first name.' ),
                    'validation'    =>  'required'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'last_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'The customer last name.' ),
                ], [
                    'label'         =>  __( 'Displayed Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'displayed_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'The customer displayed name.' ),
                ], [
                    'label'         =>  __( 'Short Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'short_name',
                    'type'          =>  'text',
                    'description'   =>  __( 'A short name used for the customer.' ),
                ], [
                    'label'         =>  __( 'Description' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'description',
                    'type'          =>  'textarea',
                ], 
            ]
        ], [
            'namespace'     =>  'address',
            'title'         =>  __( 'Addresses' ),
            'description'   =>  __( 'All customers address informations' ),
            'fields'        =>  [
                [
                    'label'         =>  __( 'First Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_first_name',
                    'type'          =>  'text'
                ], [
                    'label'         =>  __( 'Last Name' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_second_name',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Street 1' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_1',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Street 2' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_street_2',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'City' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_city',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'Zip' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_zip',
                    'type'          =>  'text',
                ], [
                    'label'         =>  __( 'State' ),
                    'appearance'    =>  'outline',
                    'name'          =>  'address_state',
                    'type'          =>  'text',
                ], 
            ]
        ]
    ]
];