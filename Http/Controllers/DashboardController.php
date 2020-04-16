<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\View;
use Tendoo\Core\Services\DateService;
use Modules\Brookr\Services\DashboardService;
use Tendoo\Core\Http\Controllers\BaseController;

class DashboardController extends BaseController
{
    public function __construct(
        DashboardService $service
    )
    {
        $this->dashboardService     =   $service;
        $this->dateService          =   app()->make( DateService::class );
    }
    
    public function getReport( Request $request )
    {
        $fromDate   =   $request->input( 'from' ) ?? $this->dateService->copy()->startOfWeek()->toDateTimeString();
        $toDate     =   $request->input( 'to' ) ?? $this->dateService->copy()->endOfWeek()->toDateTimeString();

        return $this->dashboardService->getReportForRange( $fromDate, $toDate );
    }

    public function refresh( Request $request )
    {
        $fromDate   =   $request->input( 'from' ) ?? $this->dateService->copy()->startOfWeek()->toDateTimeString();
        $toDate     =   $request->input( 'to' ) ?? $this->dateService->copy()->endOfWeek()->toDateTimeString();

        return $this->dashboardService->refreshFromRange( $fromDate, $toDate );
    }
}