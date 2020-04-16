<?php
namespace Modules\Brookr\Services;

use Modules\Brookr\Models\Company;
use Illuminate\Support\Facades\Auth;

class CompaniesService
{
    public function saveCompany( $fields, $id = null )
    {
        if ( $id === null ) {
            $company    =   new Company;
        } else {
            $company    =   $this->get( $id );
        }

        $allowedFields  =   [
            'name',
            'dba',
            'mc',
            'fein',
            'fax',
            'phone',
            'email',
            'website',
            'ifta_license',
            'us_dot',
            'logo_url',
        ];

        foreach( $allowedFields  as $field ) {
            $company->$field    =   $fields[ $field ] ?? '';
        }

        foreach([
            'paid_rate',
            'driver_rate',
            'insurance_fees',
            'elog_fees',
            'compliance_fees',
            'lumper_fees',
            'escort_fees',
            'detention_fees',
            'tonu_fees',
        ] as $field ) {
            $company->$field    =   $fields[ $field ] ?? 0;
        }

        $company->user_id       =   Auth::id();
        $company->save();

        return [
            'status'    =>  'success',
            'message'   =>  $id === null ? __( 'The company has been successfully created' ) : __( 'The company has been successfully updated.' ),
        ];
    }

    /**
     * returns specific company using 
     * the provided parameters
     * @param int company id
     * @return array
     */
    public function get( $id )
    {
        return Company::findOrFail( $id );
    }

    /**
     * Returns all available commanies
     * @return array
     */
    public function getAll()
    {
        return Company::get();
    }

    /**
     * Delete an existing company
     * @param int company id
     * @return array
     */
    public function deleteCompany( $id )
    {
        Company::findOrFail( $id )->delete();
        
        return [
            'status'    =>  'success',
            'message'   =>  __( 'The company has been successfully deleted' )
        ];
    }
}