<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Support\Arr;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Modules\Brookr\Services\CompaniesService;
use Modules\Brookr\Services\CustomersService;
use Tendoo\Core\Http\Controllers\BaseController;

class CompaniesController extends BaseController
{
    public function __construct()
    {
        $this->companiesService    =   new CompaniesService;
    }
    
    public function saveCompany( Request $request, $id = null )
    {
        $fields     =   array_merge( 
            $request->input( 'general' ), 
            $request->input( 'fees' ) 
        );
        
        return $this->companiesService->saveCompany( $fields, $id );
    }

    public function deleteCompany( $id )
    {
        return $this->companiesService->deleteCompany( $id );
    }

    public function advancePayment( $id, Request $request )
    {
        return $this->companiesService->makeAdvancePayment( $id, $request->input( 'driver-payments' ) );
    }

    public function getCompanies()
    {
        return $this->companiesService->getAll();
    }

    public function getCompanyReport( Request $request )
    {
        return $this->companiesService->getReport( $request->all() );
    }

    public function getFuelExpenses( Request $request )
    {
        return $this->companiesService->getFuelExpense( $request->only([ 'company_id', 'range_start', 'range_end']) );
    }
}