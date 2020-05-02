<?php

use Modules\Brookr\Models\DriversDetail;
use Modules\Brookr\Services\CompaniesService;

$companies      =   app()->make( CompaniesService::class );
$user           =   Auth::user();
$driversDetails =   DriversDetail::where( 'driver_id', $user->id )->first();
$detailFields   =   [];

if ( $driversDetails instanceof DriverDetail ) {
    $detailFields   =   [
        [
            'type'  =>  'text',
            'name'  =>  'first_name',
            'value' =>  $driversDetails->first_name ?? '',
            'label' =>  __( 'First Name' ),
            'description'   =>  __( 'Your actual first name.' ),
            'appearance'    =>  'outline'
        ], [
            'type'  =>  'text',
            'name'  =>  'last_name',
            'value' =>  $driversDetails->last_name ?? '',
            'label' =>  __( 'First Name' ),
            'description'   =>  __( 'Your actual first name.' ),
            'appearance'    =>  'outline'
        ], [
            'type'  =>  'text',
            'name'  =>  'phone_cell',
            'value' =>  $driversDetails->phone_cell ?? '',
            'label' =>  __( 'Phone Cell' ),
            'description'   =>  __( 'Your actual phone.' ),
            'appearance'    =>  'outline'
        ], 
    ];
}

return [
    'sections'  =>  [
        [
            'namespace'     =>      'personnal',
            'title'         =>      __( 'Personnal' ),
            'description'   =>      __( 'personnal informations.' ),
            'fields'        =>      array_merge([
                [
                    'type'  =>  'text',
                    'name'  =>  'username',
                    'value' =>  $user->username ?? '',
                    'label' =>  __( 'Username' ),
                    'description'   =>  __( 'your actual username. it can\'t be changed.' ),
                    'readonly'      =>  true,
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'email',
                    'value' =>  $user->email ?? '',
                    'label' =>  __( 'Email' ),
                    'description'   =>  __( 'The email assigned to your account. it can\'t be changed.' ),
                    'readonly'      =>  true,
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'image',
                    'name'  =>  'avatar',
                    'label' =>  __( 'Avatar' ),
                    'description'   =>  __( 'The avatar of your account.' ),
                    'readonly'      =>  true,
                    'appearance'    =>  'outline'
                ], 
            ], $detailFields )
        ], [
            'namespace'     =>  'security',
            'title'         =>  __( 'Security' ),
            'description'   =>  __( 'change your security settings' ),
            'fields'        =>  [
                [
                    'type'  =>  'password',
                    'name'  =>  'old_password',
                    'label' =>  __( 'Old Password' ),
                    'description'   =>  __( 'Input your previous password.' ),
                    'validation'    =>  'required|min:6',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'password',
                    'name'  =>  'new_password',
                    'label' =>  __( 'New Password' ),
                    'description'   =>  __( 'Input your new password.' ),
                    'validation'    =>  'required|min:6',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'password',
                    'name'  =>  'password_confirm',
                    'label' =>  __( 'Confirm New Password' ),
                    'description'   =>  __( 'Must be the same as the new password.' ),
                    'validation'    =>  'same:new_password',
                    'appearance'    =>  'outline'
                ], 
            ]
        ]
    ]
];