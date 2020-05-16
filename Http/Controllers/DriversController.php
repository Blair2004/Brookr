<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\DriversService;
use Tendoo\Core\Http\Controllers\BaseController;

class DriversController extends BaseController
{
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
}