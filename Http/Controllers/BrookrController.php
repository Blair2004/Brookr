<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Modules\Brookr\Services\DriversService;
use Modules\Brookr\Services\CustomersService;
use Tendoo\Core\Http\Controllers\BaseController;

class BrookrController extends BaseController
{
    public function __construct()
    {
        $this->customersService    =   new CustomersService;
    }
    
    public function index()
    {
        return View::make( 'Brookr::index' );
    }
}