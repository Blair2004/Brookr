<?php
namespace Modules\Brookr\Services;

use Modules\Brookr\Models\Truck;
use Illuminate\Support\Facades\Auth;
use Tendoo\Core\Http\Exceptions\NotFoundExcpetion;

class TrucksService
{
    /**
     * create a truc entity
     * @param array fields
     * @return array response
     */
    public function createTruck( $fields )
    {
        $truck                      =   new Truck;
        $truck->year                =   $field[ 'year' ];
        $truck->model               =   $field[ 'model' ];
        $truck->color               =   $field[ 'color' ];
        $truck->vin_number          =   $field[ 'vin_number' ];
        $truck->license_number      =   $field[ 'license_number' ];
        $truck->purchase_date       =   $field[ 'purchase_date' ];
        $truck->purchase_mileage    =   $field[ 'purchase_mileage' ];
        $truck->price               =   $field[ 'purchase_price' ];
        $truck->truck_number        =   $field[ 'truck_number' ];
        $truck->sold_date           =   $field[ 'sold_date' ];
        $truck->sold_price          =   $field[ 'sold_price' ];
        $truck->sold_mileage        =   $field[ 'sold_mileage' ];
        $truck->description         =   $field[ 'description' ];
        $truck->thumbnail           =   $field[ 'thumbnail' ];
        $truck->status              =   $field[ 'status' ];
        $truck->user_id             =   Auth::id();
        $truck->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The truck has been created.' ),
            'data'      =>  compact( 'truck' )
        ];
    }

    /**
     * delete specific truck using
     * provided identifier
     * @param int truck id
     * @return array response
     */
    public function deleteTruck( $id )
    {
        $truck      =   Truck::find( $id );

        if ( $truck instanceof Truck ) {
            $truck->delete();
            return [
                'statuts'   =>  'success',
                'message'   =>  __( 'The truck has been deleted' )
            ];
        }

        /**
         * @todo class needs review
         */
        throw new NotFoundException([
            'status'    =>  'failed',
            'messag'    =>  __( "Unable to find the truck you try to delete." )
        ]);
    }

    /**
     * Edit existing truck
     * @param int truck id
     * @param array fields
     * @return void
     */
    public function editTruck( $id, $fields )
    {
        $truck                      =   Truck::find( $id );

        if( $truck instanceof Truck ) {
            $truck->year                =   $field[ 'year' ];
            $truck->model               =   $field[ 'model' ];
            $truck->color               =   $field[ 'color' ];
            $truck->vin_number          =   $field[ 'vin_number' ];
            $truck->license_number      =   $field[ 'license_number' ];
            $truck->purchase_date       =   $field[ 'purchase_date' ];
            $truck->purchase_mileage    =   $field[ 'purchase_mileage' ];
            $truck->price               =   $field[ 'purchase_price' ];
            $truck->truck_number        =   $field[ 'truck_number' ];
            $truck->sold_date           =   $field[ 'sold_date' ];
            $truck->sold_price          =   $field[ 'sold_price' ];
            $truck->sold_mileage        =   $field[ 'sold_mileage' ];
            $truck->description         =   $field[ 'description' ];
            $truck->thumbnail           =   $field[ 'thumbnail' ];
            $truck->status              =   $field[ 'status' ];
            $truck->user_id             =   Auth::id();
            $truck->save();
    
            return [
                'status'    =>  'success',
                'message'   =>  __( 'The truck has been edited.' ),
                'data'      =>  compact( 'truck' )
            ];
        }

        /**
         * @todo class needs review
         */
        throw new NotFoundException([
            'status'    =>  'failed',
            'messag'    =>  __( "Unable to find the truck you try to edit." )
        ]);
    }

    /**
     * get trucks using specific status
     * filter
     * @param string status 
     * @return array
     */
    public function getTrucks( $status = 'all' ) 
    {
        switch( $status ) {
            case 'all' : return Truck::get();
            case 'available' : return Truck::where([ 'status' => 'available' ])->get();
            case 'busy' : return Truck::where([ 'status' => 'busy' ])->get();
        }

        return [];
    }

    /**
     * Get specific truck using
     * provided identifier
     * @param int truck id
     * @return Truck
     */
    public function getTruck( $id )
    {
        $truck      =   Truck::find( $id );

        if ( $truck instanceof Truck ) {
            return $truck;
        }

        throw new NotFoundException([
            'status'    =>  'failed',
            'message'   =>  __( "Unable to find the truck you are looking for" )
        ]);
    }

    public function submitTruckMaintenance( $id, $details )
    {
        $truck      =   $this->getTruck( $id );
    }
}