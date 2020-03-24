<?php 
namespace Modules\Brookr\Models;

use Illuminate\Database\Eloquent\Model;

class Truck extends Model
{
    protected $table = 'brookr_trucks';

    public function maintenance()
    {
        return $this->hasMany( TruckMaintenance::class, 'truck_id' );
    }
}