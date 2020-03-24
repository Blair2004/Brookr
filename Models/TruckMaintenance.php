<?php 
namespace Modules\Brookr\Models;

use Illuminate\Database\Eloquent\Model;

class TruckMaintenance extends Model
{
    protected $table = 'brookr_trucks_maintenances';

    public function truck()
    {
        return $this->belongsTo( Truck::class, 'truck_id' );
    }
}