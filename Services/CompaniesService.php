<?php
namespace Modules\Brookr\Services;

use Carbon\Carbon;
use Tendoo\Core\Services\Options;
use Modules\Brookr\Models\Company;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\CompanyReport;
use Modules\Brookr\Models\CompanyPayment;

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

    public function makeAdvancePayment( $id, $fields )
    {
        $driver                 =   $this->get( $id );

        $payment                =   new CompanyPayment;
        $payment->amount        =   $fields[ 'amount' ] ?? 0;
        $payment->description   =   $fields[ 'description' ];
        $payment->type          =   'advance';
        $payment->company_id    =   $id;
        $payment->user_id       =   Auth::id();
        $payment->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The payment has been correctly made.' )   
        ];
    }

    public function getReport( $fields )
    {
        $options    =   app()->make( Options::class );

        $report     =   CompanyReport::forRange(
            $fields[ 'company_id' ],
            $fields[ 'range_start' ],
            $fields[ 'range_end' ]
        );

        if ( ! $report instanceof CompanyReport ) {
            $report                 =   new CompanyReport;
            $report->user_id        =   Auth::id();
            $report->company_id     =   $fields[ 'company_id' ];
            $report->range_start    =   $fields[ 'range_start' ];
            $report->range_end      =   $fields[ 'range_end' ];
            $report->save();
        }

        $company    =   Company::find( $fields[ 'company_id' ]);
        $loads      =   Company::find( $fields[ 'company_id' ] )
            ->loads()
            ->where( 'brookr_loads_delivery.created_at', '>=', Carbon::parse( $fields[ 'range_start' ] )->startOfDay()->toDateTimeString() )
            ->where( 'brookr_loads_delivery.created_at', '<=', Carbon::parse( $fields[ 'range_end' ] )->endOfDay()->toDateTimeString() )
            ->where( 'brookr_loads_delivery.status', $options->get( 'brookr_system_delivered_status', 'delivered' ) )
            // ->with( 'driver' )
            ->get();

        $data   =   [];
        $data[ 'total_loads' ]      =   $loads->count();
        $data[ 'gross_earning' ]    =   $loads->map( function( $loads ) {
            return floatval( $load->cost );
        })->sum();
        $data[ 'dispatch_fees' ]    =   ( floatval( $company->paid_rate ) * $data[ 'gross_earning' ] ) / 100;
        // $data[ 'fuel_charge' ]      =   

        return $company;

        // $grossSales     =   $company->loads->
    }

    public function getFuelExpense( $id, $range_start, $range_end )
    {

    }
}