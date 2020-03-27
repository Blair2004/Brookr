<?php
return [
    [
        'type'          =>  'text',
        'label'         =>  __( 'Username' ),
        'validation'    =>  'required',
        'name'          =>  'username',
        'description'   =>  __( 'Your username or email.' ),
        'appearance'    =>  'outline'
    ], [
        'type'          =>  'password',
        'label'         =>  __( 'Password' ),
        'name'          =>  'password',
        'validation'    =>  'required',
        'description'   =>  __( 'Your secret password.' ),
        'appearance'    =>  'outline'
    ],
];