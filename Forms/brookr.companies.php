<?php

use Modules\Brookr\Services\CompaniesService;

if ( ! Auth::user()->allowedTo( 'brookr.see.companies' ) ) {
    throw new Exception( __( 'You\'re not allowed to see this page.' ) );
}

$companies      =   app()->make( CompaniesService::class );
$company        =   ! empty( $index ) ? $companies->get( $index ) : new stdClass;

return [
    'sections'  =>  [
        [
            'namespace'     =>      'general',
            'title'         =>      __( 'General' ),
            'description'   =>      __( 'Regular fields for the companies' ),
            'fields'        =>  [
                [
                    'type'  =>  'text',
                    'name'  =>  'name',
                    'value' =>  $company->name ?? '',
                    'label' =>  __( 'Company Name' ),
                    'description'   =>  __( 'company name.' ),
                    'validation'    =>  'required',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'dba',
                    'value'         =>  $company->dba ?? '',
                    'label' =>  __( 'DBA' ),
                    // 'description'   =>  __( '' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'mc',
                    'value'         =>  $company->mc ?? '',
                    'label' =>  __( 'MC' ),
                    // 'description'   =>  __( '' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'fein',
                    'value'         =>  $company->fein ?? '',
                    'label' =>  __( 'FEIN' ),
                    // 'description'   =>  __( '' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'fax',
                    'value'         =>  $company->fax ?? '',
                    'label' =>  __( 'Fax' ),
                    'description'   =>  __( 'Company fax number' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'phone',
                    'value'         =>  $company->phone ?? '',
                    'label' =>  __( 'Phone' ),
                    'description'   =>  __( 'Company phone number' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'email',
                    'name'  =>  'email',
                    'value'         =>  $company->email ?? '',
                    'label' =>  __( 'Email Address' ),
                    'description'   =>  __( 'The company email address' ),
                    'validation'    =>  'sometime|email',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'website',
                    'value'         =>  $company->website ?? '',
                    'label' =>  __( 'Website' ),
                    'description'   =>  __( 'The URL to reach the company website.' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'ifta_license',
                    'value'         =>  $company->ifta_license ?? '',
                    'label' =>  __( 'IFTA License' ),
                    'description'   =>  __( '' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'text',
                    'name'  =>  'us_dot',
                    'value'         =>  $company->us_dot ?? '',
                    'label' =>  __( 'US Dot' ),
                    'description'   =>  __( '' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'image',
                    'name'  =>  'logo_url',
                    'value'         =>  $company->logo_url ?? '',
                    'label' =>  __( 'Logo' ),
                    'description'   =>  __( 'Company logo.' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ]
            ]
        ], [
            'namespace'     =>  'fees',
            'title'         =>  __( 'Fees' ),
            'description'   =>  __( 'This section groups fees configuration which apply to the company and his drivers' ),
            'fields'        =>  [
                [
                    'type'  =>  'number',
                    'name'  =>  'paid_rate',
                    'value' =>  $company->paid_rate ?? 0,
                    'label' =>  __( 'Dispatch Fees' ),
                    'description'   =>  __( 'Determine what are the dispatch fees that applies to the company.' ),
                    'validation'    =>  'required',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'number',
                    'name'  =>  'driver_rate',
                    'value' =>  $company->driver_rate ?? 0,
                    'label' =>  __( 'Driver Rate' ),
                    'description'   =>  __( 'How many from the Paid Rate the driver get in percentage.' ),
                    'validation'    =>  'required',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'number',
                    'name'  =>  'insurance_fees',
                    'value' =>  $company->insurance_fee ?? 0,
                    'label' =>  __( 'Insurance Fees' ),
                    'description'   =>  __( 'The insurance flat rate which apply to the company\'s drivers.' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'number',
                    'name'  =>  'elog_fees',
                    'value' =>  $company->elog_fees ?? 0,
                    'label' =>  __( 'Elog Fees' ),
                    'description'   =>  __( 'The ELOG fee which applies to the company\'s drivers' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'number',
                    'name'  =>  'compliance_fees',
                    'value' =>  $company->compliance_fe ?? 0,
                    'label' =>  __( 'Compliances Fees' ),
                    'description'   =>  __( 'The compliances fees which apply to the company\'s drivers.' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'number',
                    'name'  =>  'lumper_fees',
                    'value' =>  $company->lumper_fees ?? 0,
                    'label' =>  __( 'Lumper Fees Rate' ),
                    'description'   =>  __( 'How much are deducted as a fee from the lumper cost (in percentage).' ),
                    'validation'    =>  'required',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'number',
                    'name'  =>  'escort_fees',
                    'value' =>  $company->escort_fees ?? 0,
                    'label' =>  __( 'Escort Fees Rate' ),
                    'description'   =>  __( 'How much are deducted as fee from the escrot cost (in percentage).' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'number',
                    'name'  =>  'detention_fees',
                    'value' =>  $company->detention_fee ?? 0,
                    'label' =>  __( 'Detention Fees' ),
                    'description'   =>  __( 'How much is deducted as fee from the detention cost (in percentage).' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ], [
                    'type'  =>  'number',
                    'name'  =>  'tonu_fees',
                    'value' =>  $company->tonu_fees ?? 0,
                    'label' =>  __( 'TONU Fees' ),
                    'description'   =>  __( 'How much is deducted as fee from the TONU cost (in percentage).' ),
                    'validation'    =>  '',
                    'appearance'    =>  'outline'
                ],
            ]
        ]
    ]
];