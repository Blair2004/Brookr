<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Brookr\Services\DriversService;
use Modules\Brookr\Services\CustomersService;
use Tendoo\Core\Http\Controllers\BaseController;

class CustomersController extends BaseController
{
    public function __construct()
    {
        $this->customersService    =   new CustomersService;
    }

    public function createCustomer( Request $request, $index = null )
    {
        return $this->customersService->defineCustomer( $request->all(), $index );
    }

    public function editCustomer( Request $request, $index = null )
    {
        return $this->customersService->registerCustomer( $request->all(), $index );
    }
}