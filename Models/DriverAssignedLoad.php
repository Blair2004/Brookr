<?php 
namespace Modules\Brookr\Models;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\LoadDelivery;

class DriverAssignedLoad extends Model
{
    protected $table = 'brookr_loads_delivery';

    protected static function booted()
    {
        static::addGlobalScope( 'user_id', function( Builder $builder ) {
            $builder->where( 'user_id', Auth::id() );
        });
    }

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