<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Http\Request;
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

    public function deleteTruck( $id )
    {
        return $this->truckService->deleteTruck( $id );
    }

    public function editTruck( $id, Request $request )
    {
        return $this->truckService->editTruck( $id, $request->all() );
    }

    public function saveMaintenance( Request $request )
    {
        $fields     =   $request->all();
        return $this->truckService->submitTruckMaintenance( $fields[ 'general' ] );
    }

    public function getTrucks()
    {
        return $this->truckService->getTrucks();
    }
}