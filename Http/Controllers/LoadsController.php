<?php
namespace Modules\Brookr\Http\Controllers;

use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\DB;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\Location;
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
        $loads      =   $request->all();
        $data       =   [];

        foreach( $loads as $key => $value ) {
            Arr::set( $data, str_replace( '--', '.', $key ), $value === 'null' ? null : $value );
        }

        return $this->loadsService->create( $data );
    }

    public function deleteLocation( $id )
    {
        $delivery   =   LoadDelivery::where( 'delivery_location_id', $id )->first();
        $pickup     =   LoadDelivery::where( 'pickup_location_id', $id )->first();

        if ( 
            $pickup instanceof LoadDelivery ||
            $delivery instanceof LoadDelivery
        ) {
            throw new Exception( __( 'The current location is in use.' ) );
        }

        Location::find( $id )->delete();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The location has been deleted' )
        ];
    }

    public function editLoad( Request $request, $id )
    {
        $loads      =   $request->all();
        $data       =   [];

        foreach( $loads as $key => $value ) {
            Arr::set( $data, str_replace( '--', '.', $key ), in_array( $value, [ 'null', null ], true ) ? null : $value );
        }

        return $this->loadsService->edit( $id, $data );
    }

    public function getDocumentLink( $id, $document )
    {
        if ( in_array( $document, [ 'rate_document_url', 'delivery_document_url' ] ) ) {
            $load       =   $this->loadsService->get( $id );

            if ( ! empty( $load->$document ) ) {
                return [
                    'status'    =>  'success',
                    'message'   =>  __( 'The link is available' ),
                    'data'      =>  [
                        'url'   =>  url( $load->$document )
                    ]
                ];
            }

            return response()->json([
                'status'    =>  'failed',
                'message'   =>  __( 'Unable to retreive the document you\'re looking for as it doesn\'t exists.' ),
                'data'      =>  $load
            ], 401 );
        }
        
        return response()->json([
            'status'    =>  'failed',
            'message'   =>  __( 'Unable to retreive the type of document you\'re looking for.' ),
        ], 401 );
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

    public function getUnassigned()
    {
        return $this->loadsService->getUnassigned( 10, 'asc' );
    }

    public function selfAssignDriver( $load_id, Request $request )
    {
        return $this->loadsService->selfAssignDriver( $load_id, $request->only( 'load' ) );
    }

    public function startDelivery( $id, Request $request )
    {
        return $this->loadsService->startDelivery( $id, $request->only([ 'load' ]) );
    }

    public function awaitingLoadDelivery( $id )
    {
        return $this->loadsService->awaitingLoadDelivery( $id );
    }

    public function stopDelivery( $id, Request $request )
    {
        return $this->loadsService->stopDelivery( $id, $request );
    }

    public function saveLocation( Request $request )
    {
        $location   =   Location::where( 'name', $request->input( 'main.name' ) )->first();
        
        if ( $location instanceof Location ) {
            return [
                'status'    =>  'info',
                'message'   =>  __( 'The location already exists' ),
            ];
        }

        $location               =   new Location;
        $location->name         =   $request->input( 'main.name' );
        $location->description  =   $request->input( 'general.description' );
        $location->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The location has been saved.' )
        ];
    }

    public function updateLocation( $location_id, Request $request )
    {
        $location               =   Location::findOrFail( $location_id );
        $location->name         =   $request->input( 'main.name' );
        $location->description  =   $request->input( 'general.description' );
        $location->save();

        LoadDelivery::where( 'delivery_location_id', $location->id )
            ->update([ 
                'delivery_city'     =>  $location->name
            ]);

        LoadDelivery::where( 'pickup_location_id', $location->id )
            ->update([
                'pickup_city'   =>  $location->name
            ]);

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The location has been saved.' )
        ];
    }

    public function notifyEmail( $namespace, $id )
    {
        $load   =   LoadDelivery::findOrFail( $id );
        return $this->loadsService->notifyAction( $namespace, $load );
    }

    public function getLoadHistory( $id )
    {
        $load   =   LoadDelivery::findOrFail( $id );
        return $this->loadsService->getHistory( $load );
    }

    public function unassignDriverToLoad( $id )
    {
        $load   =   LoadDelivery::findOrFail( $id );
        return $this->loadsService->unassignDriver( $load );
    }

    public function getLocations()
    {
        return Location::orderBy( 'name', 'asc' )->get();
    }
}