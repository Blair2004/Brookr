<?php
namespace Modules\Brookr\Services;

use Illuminate\Support\Str;
use Modules\Brookr\Models\Truck;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use Modules\Brookr\Models\TruckMaintenance;
use Tendoo\Core\Exceptions\NotFoundException;

class TrucksService
{
    /**
     * create a truc entity
     * @param array fields
     * @return array response
     */
    public function createTruck( $fields )
    {
        $fields                     =   array_merge( $fields[ 'general' ], $fields[ 'company' ] );
        $truck                      =   new Truck;
        $truck->year                =   $fields[ 'year' ];
        $truck->model               =   $fields[ 'model' ];
        $truck->name                =   $fields[ 'name' ];
        $truck->color               =   $fields[ 'color' ];
        $truck->vin_number          =   $fields[ 'vin_number' ];
        $truck->license_number      =   $fields[ 'license_number' ];
        $truck->purchase_date       =   $fields[ 'purchase_date' ];
        $truck->purchase_mileage    =   $fields[ 'purchase_mileage' ];
        $truck->purchase_price      =   $fields[ 'purchase_price' ];
        $truck->truck_number        =   $fields[ 'truck_number' ];
        $truck->sold_date           =   $fields[ 'sold_date' ];
        $truck->sold_price          =   $fields[ 'sold_price' ];
        $truck->sold_mileage        =   $fields[ 'sold_mileage' ];
        $truck->description         =   $fields[ 'description' ];
        $truck->thumbnail           =   $fields[ 'thumbnail' ];
        $truck->status              =   $fields[ 'status' ] ? 'available' : 'unavailable';
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

            $truck->maintenance->each( function( $report ) {
                $report->delete();
            });

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
    public function editTruck( $id, $field )
    {
        $truck                      =   Truck::find( $id );

        if( $truck instanceof Truck ) {
            $field                      =   array_merge( $field[ 'general' ], $field[ 'company' ] );
            $truck->year                =   $field[ 'year' ];
            $truck->model               =   $field[ 'model' ];
            $truck->color               =   $field[ 'color' ];
            $truck->vin_number          =   $field[ 'vin_number' ];
            $truck->license_number      =   $field[ 'license_number' ];
            $truck->purchase_date       =   $field[ 'purchase_date' ];
            $truck->purchase_mileage    =   $field[ 'purchase_mileage' ];
            $truck->purchase_price      =   $field[ 'purchase_price' ];
            $truck->truck_number        =   $field[ 'truck_number' ];
            $truck->sold_date           =   $field[ 'sold_date' ];
            $truck->sold_price          =   $field[ 'sold_price' ];
            $truck->sold_mileage        =   $field[ 'sold_mileage' ];
            $truck->description         =   $field[ 'description' ];
            $truck->thumbnail           =   $field[ 'thumbnail' ];
            $truck->status              =   $field[ 'status' ] ? 'available' : 'unavailable';
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

    public function submitTruckMaintenance( $fields )
    {
        $truck      =   $this->getTruck( $fields[ 'truck_id' ] );

        $maintenance                    =   new TruckMaintenance;
        $maintenance->name              =   $fields[ 'name' ];
        $maintenance->description       =   $fields[ 'description' ];
        $maintenance->cost              =   $fields[ 'cost' ];
        $maintenance->truck_id          =   $fields[ 'truck_id' ];
        $maintenance->user_id           =   Auth::id();
        $maintenance->save();
                
        if ( ! empty( $fields[ 'document_url' ] ) ) {
            $maintenance->document_url      =   $this->saveBase64ToJPG( 
                $fields[ 'document_url' ], 
                Str::slug( 'maintenance-document-' . $fields[ 'truck_id' ] . '-' . $maintenance->id ) 
            );
        }

        $maintenance->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The maintenance report has been created' ),
            'data'      =>  compact( 'maintenance' )
        ];
    }

    private function saveBase64ToJPG( $base64, $filename )
    {
        $image      =   str_replace('data:image/png;base64,', '', $base64);
        $image      =   str_replace(' ', '+', $base64);
        $filename   =   Str::random(10).'.'.'png';
        $complete   =   '/brookr/trucks-maintenances/' . $filename;
        File::put( storage_path() . $complete, base64_decode($image));

        return url( $complete );
    }

    /**
     * Delete an existing truck record
     * @param int truck maintenance id
     * @param array
     */
    public function deleteTruckMaintenanceRecord( $id )
    {
        $maintenance     =   $this->getTruckMaintenance( $id );
        $maintenance->delete();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The truck report has been deleted' )
        ];
    }

    /**
     * get existing truck maintenance using
     * a defined identifier
     * @param int truck maintenance id
     * @return array
     */
    public function getTruckMaintenance( $id )
    {
        $maintenance    =   TruckMaintenance::find( $id );

        if ( $maintenance instanceof TruckMaintenance ) {
            return $maintenance;
        }

        throw new NotFoundException([
            'status'    =>  'failed',
            'message'   =>  __( 'Unable to find the truck maintenance entry using the provided identifier.' )
        ]);
    }

    /**
     * Update a specific maintenance using
     * the provided identifier
     * @param int id
     * @param array fields
     * @return array response
     */
    public function udpateMaintenance( $id, $fields )
    {
        $maintenance    =   $this->getTruckMaintenance( $id );

        foreach( $fields as $key => $value ) {
            $maintenance->$key  =   $value;
        }
        
        $maintenance->user_id   =   Auth::id();
        $maintenance->save();

        return [
            'status'    =>  'success',
            'message'   =>  __( 'The maintenance has been correctly updated' )
        ];
    }
}