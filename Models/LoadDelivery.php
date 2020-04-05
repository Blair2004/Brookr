<?php 
namespace Modules\Brookr\Models;

use Illuminate\Database\Eloquent\Model;

class LoadDelivery extends Model
{
    protected $table = 'brookr_loads_delivery';

    public function scopeOngoing( $query ) 
    {
        return $query->where( 'status', 'ongoing' );
    }
}