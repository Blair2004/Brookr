<?php 
namespace Modules\Brookr\Models;

use Illuminate\Database\Eloquent\Model;

class DriversDetail extends Model
{
    protected $table = 'brookr_drivers_details';

    public function driver()
    {
        return $this->hasOne( Driver::class, 'id', 'driver_id' );
    }
}