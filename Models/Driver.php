<?php 
namespace Modules\Brookr\Models;

use Tendoo\Core\Models\User;
use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\DriversDetail;
use Modules\Brookr\Models\Scopes\DriversScope;

class Driver extends User
{
    protected $table = 'tendoo_users';

    protected $cats     =   [
        'active'        =>  'boolean'
    ];

    public static function boot()
    {
        parent::boot();

        Driver::deleting( function( $instance ) {
            $instance->details->delete();
        });
    }

    protected static function booted()
    {
        static::addGlobalScope( new DriversScope );
    }

    public function scopeAvailable( $query )
    {
        return $query->where( 'brookr_driver_status', 'available' );
    }

    public function scopeUnavailable( $query )
    {
        return $query->where( 'brookr_driver_status', 'unavailable' );
    }

    public function loads()
    {
        return $this->hasMany( LoadDelivery::class, 'driver_id' );
    }

    public function details()
    {
        return $this->hasOne( DriversDetail::class, 'driver_id' );
    }

    public function payments()
    {
        return $this->hasMany( DriversPayment::class, 'driver_id' );
    }
}