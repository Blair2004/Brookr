<?php 
namespace Modules\Brookr\Models;

use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\Traits\OnlyDrivers;

include_once( dirname( __FILE__ ) . '/Traits/OnlyDrivers.php' );
include_once( dirname( __FILE__ ) . '/Scopes/DriversScope.php' );

class Driver extends Model
{
    use OnlyDrivers;
    
    protected $table = 'tendoo_users';

    public function scopeAvailable( $query )
    {
        return $query->where( 'brookr_driver_available', 1 );
    }
}