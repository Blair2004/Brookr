<?php 
namespace Modules\Brookr\Models;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Database\Eloquent\Model;

class LoadDelivery extends Model
{
    protected $table = 'brookr_loads_delivery';

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
}