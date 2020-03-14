<?php
namespace Modules\Brookr\Services;

use Modules\Brookr\Models\Truck;
use Illuminate\Support\Facades\Auth;

class TrucksService
{
    public function create( $fields )
    {
        $truck                      =   new Truck;
        $truck->year                =   $field[ 'year' ];
        $truck->model               =   $field[ 'model' ];
        $truck->color               =   $field[ 'color' ];
        $truck->vin_number          =   $field[ 'vin_number' ];
        $truck->license_number      =   $field[ 'license_number' ];
        $truck->purchase_date       =   $field[ 'purchase_date' ];
        $truck->purchase_mileage    =   $field[ 'purchase_mileage' ];
        $truck->price               =   $field[ 'price' ];
        $truck->truck_number        =   $field[ 'truck_number' ];
        $truck->sold_date           =   $field[ 'sold_date' ];
        $truck->sold_price          =   $field[ 'sold_price' ];
        $truck->sold_mileage        =   $field[ 'sold_mileage' ];
        $truck->description         =   $field[ 'description' ];
        $truck->thumbnail           =   $field[ 'thumbnail' ];
        
        $truck->user_id             =   Auth::id();
    }
}