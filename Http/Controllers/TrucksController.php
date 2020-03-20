<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminat\Support\Http\Request;
use Modules\Brookr\Services\TrucksService;
use Tendoo\Core\Http\Controllers\BaseController;

class TrucksController extends BaseController
{
    public function __construct()
    {
        $this->truckService      =   new TrucksService;
    }

    public function saveTruck( Request $request )
    {
        return $this->truckService->createTruck( $request->all() );
    }

    public function deleteTrucks( $id )
    {
        $this->truckService->deleteTruck( $id );
    }
}