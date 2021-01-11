<?php 
namespace Modules\Brookr\Models;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Modules\Brookr\Models\Customer;
use Illuminate\Database\Eloquent\Model;

class LoadDelivery extends Model
{
    protected $table        = 'brookr_loads_delivery';
    protected $timestamp    =   false;

    protected $casts    =   [
        'visible'   =>  'boolean'
    ];

    public function scopeOngoing( $query ) 
    {
        return $query->where( 'status', 'ongoing' );
    }

    public function truck()
    {
        return $this->hasOne( Truck::class, 'id', 'truck_id' );
    }

    public function driver()
    {
        return $this->hasOne( Driver::class, 'id', 'driver_id' );
    }

    public function delivery_location()
    {
        return $this->hasOne( Location::class, 'id', 'delivery_location_id' );
    }

    public function pickup_location()
    {
        return $this->hasOne( Location::class, 'id', 'pickup_location_id' );
    }

    public function customer()
    {
        return $this->hasOne( Customer::class, 'id', 'brooker_id' );
    }

    public function history()
    {
        return $this->hasMany( LoadDeliveryHistory::class, 'load_id' );
    }
}