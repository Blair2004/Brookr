<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Http\Request;
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
}