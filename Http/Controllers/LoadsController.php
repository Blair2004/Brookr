<?php
namespace Modules\Brookr\Http\Controllers;

use Illuminate\Http\Request;
use Modules\Brookr\Services\LoadsService;
use Tendoo\Core\Http\Controllers\BaseController;

class LoadsController extends BaseController
{
    public function __construct()
    {
        $this->loadsService    =   app()->make( LoadsService::class );
    }

    public function saveLoad( Request $request )
    {
        return $this->loadsService->create( $request->all() );
    }

    public function editLoad( Request $request, $id )
    {
        return $this->loadsService->edit( $id, $request->all() );
    }

    public function deleteLoad( $id )
    {
        return $this->loadsService->deleteLoad( $id );
    }

    public function updateLoadAssignation( $load, Request $request )
    {
        return $this->loadsService->updateLoadAssignation( $load, $request->input( 'drivers' ) );
    }

    public function updateLoadStatus( $load, Request $request )
    {
        return $this->loadsService->updateLoadStatus( $load, $request->input( 'load' ) );
    }
}