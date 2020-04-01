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
}