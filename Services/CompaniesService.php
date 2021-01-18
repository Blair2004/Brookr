<?php
namespace Modules\Brookr\Services;

use Exception;
use Carbon\Carbon;
use Tendoo\Core\Services\Options;
use Modules\Brookr\Models\Company;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\CompanyReport;
use Modules\Brookr\Models\CompanyPayment;
use Modules\Brookr\Models\DriversPayment;
use Modules\Brookr\Models\CompanyFuelCharge;
use Modules\Brookr\Models\Driver;

class CompaniesService
{
    public function __construct()
    {
        $this->dateFormat   =   app()->make( Options::class )->get( 'brookr_system_datetime_format', 'Y-m-d' );
    }

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
            'comdata_fees',
            'ach_fees',
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
        return Company::orderBy( 'name', 'asc' )->get();
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
        $options        =   app()->make( Options::class );
        $rangeStart     =   Carbon::parse( $fields[ 'range_start' ] )->startOfDay();
        $rangeEnd       =   Carbon::parse( $fields[ 'range_end' ] )->endOfDay();

        if ( intval( $rangeStart->diffInDays( $rangeEnd ) ) !== 6 ) {
            // throw new Exception( __( 'The report you\'re trying to generate doesn\'t cover 7 days as it should for a weekly report.' ) );
        }
            
        $report     =   CompanyReport::forRange(
            $fields[ 'company_id' ],
            $fields[ 'driver_id' ],
            $rangeStart->toDateTimeString(),
            $rangeEnd->toDateTimeString()
        )->first();
            
        if ( ! $report instanceof CompanyReport ) {
            /**
             * checking if the report doesn't 
             * enter in conflict with existing report
             */
            $conflict       =   CompanyReport::orWhere( function( $query ) use ( $rangeStart, $rangeEnd ) {
                $query
                    ->where( 'range_start', '<', $rangeStart->toDateTimeString() )
                    ->where( 'range_end', '>', $rangeStart->toDateTimeString() );
            })->orWhere( function( $query ) use ( $rangeStart, $rangeEnd ) {
                $query->where( 'range_start', '<', $rangeEnd->toDateTimeString() )
                    ->where( 'range_end', '>', $rangeEnd->toDateTimeString() );
            })
                ->where( 'company_id', $fields[ 'company_id' ])            
                ->whereIn( 'driver_id', $fields[ 'driver_id' ])            
                ->first();

            // if ( $conflict instanceof CompanyReport ) {
            //     throw new Exception( 
            //         sprintf(
            //             __( 'Unable to generate a report as the time range enter in conflict with a report generated from %s to %s for the same company.' ),
            //             $conflict->range_start,
            //             $conflict->range_end
            //         )
            //     );
            // }
            
            $report                 =   new CompanyReport;
            $report->user_id        =   Auth::id();
            $report->company_id     =   $fields[ 'company_id' ];
            // $report->driver_id      =   $fields[ 'driver_id' ][0];
            $report->range_start    =   $rangeStart->toDateTimeString();
            $report->range_end      =   $rangeEnd->toDateTimeString();
            // $report->save();
        }

        $drivers    =   Driver::with( 'details' )->whereIn( 'id', $fields[ 'driver_id' ] )->get();
        $fuels      =   CompanyFuelCharge::where( 'company_id', $report->id )
            ->where( 'created_at', '>=', $report->range_start )
            ->where( 'created_at', '<=', $report->range_end )
            ->get();
        $company    =   Company::find( $fields[ 'company_id' ]);
        $loadRequest      =   Company::find( $fields[ 'company_id' ] )
            ->loads()
            ->whereIn( 'brookr_loads_delivery.driver_id', $fields[ 'driver_id' ] )
            ->where( 'brookr_loads_delivery.created_at', '>=', $rangeStart->toDateTimeString() )
            ->where( 'brookr_loads_delivery.created_at', '<=', $rangeEnd->toDateTimeString() )
            ->where( 'brookr_loads_delivery.status', $options->get( 'brookr_system_delivered_status', 'delivered' ) );

        if ( $fields[ 'delivery_location' ] !== null ) {
            $loadRequest->where( 'delivery_location_id', $fields[ 'delivery_location' ] );
        }

        if ( $fields[ 'pickup_location' ] !== null ) {
            $loadRequest->where( 'pickup_location_id', $fields[ 'pickup_location' ] );
        }

        $loads  =   $loadRequest->with( 'customer.details', 'driver.details' )
            ->get();
            
        $payments   =   DriversPayment::where( 'created_at', '>=', $rangeStart->toDateTimeString() )
            ->where( 'created_at', '<=', $rangeEnd->toDateTimeString() )
            ->whereIn( 'driver_id', $fields[ 'driver_id' ])
            ->get();

        $report->driver_advance_payment     =   0;
        $payments->each( function( $payment ) use ( &$report ) {
            $report->driver_advance_payment     +=  floatval( $payment->amount );
        });

        /**
         * Total loads during
         * a specific period
         */
        $report->total_loads      =   $loads->count();

        /**
         * computing gross earning
         */
        $report->gross_earning    =   $loads->map( function( $load ) {
            return floatval( $load->cost );
        })->sum();

        /**
         * calculating dispatch fees
         */
        $report->dispatch_fees      =   ( floatval( $company->paid_rate ) * $report->gross_earning ) / 100;

        /**
         * compute net after dispatch 
         * fees
         */
        $report->net_after_dispatch     =   $report->gross_earning - $report->dispatch_fees;
        
        /**
         * Computing fuel charges
         */
        $report->fuel_charge      =   $fuels->map( function( $fuel ) {
            return floatval( $fuel->amount );
        })->sum();

        $gross                      =   [];
        $gross[ 'lumper_fees' ]     =   $loads->map( function( $load ) {
            return floatval( $load->lumper_fees );
        })->sum();

        $gross[ 'escort_fees' ]      =   $loads->map( function( $load ) {
            return floatval( $load->escort_fees );
        })->sum();

        $gross[ 'detention_fees' ]      =   $loads->map( function( $load ) {
            return floatval( $load->detention_fees );
        })->sum();

        /**
         * computing total expenses
         */
        $report->total_expenses     =   0;

        collect([
            'lumper_fees',
            'escort_fees',
            'insurance_fees',
            'elog_fees',
            'compliance_fees',
            'detention_fees',
            'tonu_fees',
            'ach_fees',
            'comdata_fees',
        ])->map( function( $expense ) use ( $report, $company, &$gross ) {
            if ( in_array( $expense, [ 'escort_fees', 'lumper_fees', 'detention_fees' ] ) ) {
                $gross[ $expense ]                  =   ( floatval( $company->$expense ) * $gross[ $expense ] ) / 100;
                $report->{ 'total_' . $expense }    =   $gross[ $expense ];
            } else if ( in_array( $expense, [ 'compliance_fees', 'insurance_fees', 'elog_fees', 'ach_fees', 'comdata_fees' ] ) ) {
                $report->{ 'total_' . $expense }    =   floatval( $company->$expense );
                $report->total_expenses             +=  floatval( $company->$expense );
            } else {
                $report->{ 'total_' . $expense }    =   ( floatval( $company->$expense ) * $report->net_after_dispatch ) / 100;
                $report->total_expenses             +=  $report->{ 'total_' . $expense };
            }
        });

        $report->additional_payment     =   $gross[ 'escort_fees' ] + $gross[ 'lumper_fees' ] + $gross[ 'detention_fees' ];
        $report->driver_payment         =   ( ( $report->net_after_dispatch * floatval( $company->driver_rate ) ) / 100 ) - $report->driver_advance_payment ;
        $report->net_earning            =   $report->net_after_dispatch - ( $report->total_expenses + $report->driver_advance_payment + $report->fuel_charge ) + $report->additional_payment;
        // $report->save();

        foreach([
            'gross_earning',
            'dispatch_fees',
            'fuel_charge',
            'total_expenses',
            'driver_payment',
            'net_earning',
            'total_lumper_fees',
            'total_escort_fees',
            'total_insurance_fees',
            'total_elog_fees',
            'total_compliance_fees',
            'total_detention_fees',
            'total_tonu_fees',
            'driver_advance_payment',
            'net_after_dispatch',
            'additional_payment',
            'total_comdata_fees',
            'total_ach_fees',
        ] as $amount ) {
            $report->$amount  =   br_currency( $report->$amount ?? 0 );
        }

        $report->range_start        =   br_date( $fields[ 'range_start' ] );
        $report->range_end          =   br_date( $fields[ 'range_end' ] );

        $loads->each( function( $load ) {
            $load->cost     =   br_currency( $load->cost );
        });

        $fuels->each( function( $fuel ) {
            $fuel->amount     =   br_currency( $fuel->amount );
            $fuel->date          =   Carbon::parse( $fuel->created_at )->format( app()->make( Options::class )->get( 'brookr_system_datetime_format', 'Y-m-d' ) );
        });

        $payments   =   $payments->map( function( $payment ) {
            $payment->amount        =   br_currency( $payment->amount );
            $payment->date          =   Carbon::parse( $payment->created_at )->format( app()->make( Options::class )->get( 'brookr_system_datetime_format', 'Y-m-d' ) );
            return $payment;
        });

        return compact( 'report', 'company', 'loads', 'drivers', 'payments', 'fuels' );
    }

    public function saveFuelExpense( $fields )
    {
        $fuel   =   new CompanyFuelCharge;
        $fuel->company_id   =   $fields[ 'company_id' ];
        $fuel->amount       =   $fields[ 'amount' ];
        $fuel->driver_id    =   $fields[ 'driver_id' ];
        $fuel->created_at   =   $fields[ 'date' ];
        $fuel->report_id    =   $fields[ 'report_id' ];
        $fuel->user_id      =   Auth::id();
        $fuel->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The fuel expense has been saved.' ),
            'data'      =>  compact( 'fuel' )
        ];
    }

    public function getFuelExpense( $report_id )
    {
        return  CompanyFuelCharge::where( 'report_id', $report_id )
            ->get()->map( function( $expense ) {
                $expense->amount    =   \br_currency( $expense->amount );
                $expense->date      =   Carbon::parse( $expense->created_at )->format( $this->dateFormat );
                return $expense;
            });
    }

    public function deleteFuelRecord( $id )
    {
        $fuelCharge     =   CompanyFuelCharge::findOrFail( $id );
        $fuelCharge->delete();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The fuel charge has been correctly deleted.' )
        ];
    }
}