<?php 
namespace Modules\Brookr\Models;

use Tendoo\Core\Models\User;
use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\Scopes\DriversScope;

class Driver extends User
{
    protected $table = 'tendoo_users';

    protected static function booted()
    {
        static::addGlobalScope( new DriversScope );
    }

    public function scopeAvailable( $query )
    {
        return $query->where( 'brookr_driver_available', 1 );
    }

    public function loads()
    {
        return $this->hasMany( LoadDelivery::class, 'driver_id' );
    }
}