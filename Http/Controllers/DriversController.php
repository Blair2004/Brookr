<?php
namespace Modules\Brookr\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Modules\Brookr\Http\Requests\SaveFuelRequest;
use Modules\Brookr\Models\DriversDetail;
use Modules\Brookr\Models\DriversPayment;
use Modules\Brookr\Models\Driver;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\DriversService;
use Tendoo\Core\Http\Controllers\BaseController;

class DriversController extends BaseController
{
    /**
     * @var DriversService;
     */
    private $driversService;

    public function __construct()
    {
        $this->driversService    =   new DriversService;
    }

    public function setDriver( Request $request, $index = null )
    {
        return $this->driversService->setDriver( $request->all(), $index );
    }

    public function getByMedicalCard()
    {
        return $this->driversService->getByMedicalCard( 5, 'asc' );
    }

    public function getByDriverCard()
    {
        return $this->driversService->getByDriverCard( 5, 'asc' );
    }

    public function getDrivers()
    {
        return $this->driversService->getByName();
    }

    public function saveFuelExpense( SaveFuelRequest $request )
    {
        return $this->driversService->saveFuelExpense( $request->all() );
    }

    public function deleteDriver( $id )
    {
        return $this->driversService->deleteDriver( $id );
    }

    public function checkDriverAvailability()
    {
        $result     =   $this->driversService->availability( Auth::id() );
        
        if ( $result[ 'status' ] ) {
            return $result;
        } else {
            return response()->json( $result, 401 );
        }
    }

    public function makeAdvancePayment( Request $request, $driver_id )
    {
        return $this->driversService->makePayment( $driver_id, $request->input( 'driver-payments' ) );
    }

    public function updatePayment( Request $request, $payment_id )
    {
        return $this->driversService->updatePayment( $payment_id, $request->input( 'driver-payments' ) );
    }

    public function downloadAssets( $driver_id, $namespace )
    {
        $driver     =   $this->driversService->get( $driver_id );

        if ( ! $driver->details instanceof DriversDetail ) {
            throw new Exception( __( 'No information is attached to this driver. Consider filling the driver informations.' ) );
        }
        
        if ( Storage::disk( 'public' )->exists( $driver->details->$namespace ) ) {
            return [
                'status'    =>  'success',
                'message'   =>  __( 'Url available' ),
                'data'      =>  [
                    'url'   =>  url( 'storage' . $driver->details->$namespace )
                ]
            ];
        }

        throw new Exception( __( 'Unable to find the document requested at ' . base_path() . '/public' . $driver->details->$namespace ) );
    }

    public function getDriverPayment( $id )
    {
        $driver     =   Driver::where( 'id', $id )->with( 'payments' )->first();
        $driver->payments->each( function( &$payment ) {
            $payment->amount    =   br_currency( $payment->amount );
            $payment->date      =   br_date( $payment->created_at );
        });

        return $driver;
    }

    public function deleteDriverPayment( $id ) 
    {
        DriversPayment::findOrFail( $id )->delete();
        
        return [
            'status'    =>  'success',
            'message'   =>  __( 'The payment has been deleted' )
        ];
    }
}