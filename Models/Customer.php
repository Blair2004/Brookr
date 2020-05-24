<?php 
namespace Modules\Brookr\Models;

use Tendoo\Core\Models\User;
use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\Scopes\CustomerScope;

class Customer extends User
{
    protected $table = 'tendoo_users';

    protected $cats     =   [
    ];

    public static function booted()
    {
        static::addGlobalScope( new CustomerScope );
    }

    public static function boot()
    {
        parent::boot();

        Driver::deleting( function( $instance ) {
            $instance->details->delete();
        });
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
        return $this->hasMany( LoadDelivery::class, 'customers_id' );
    }

    public function details()
    {
        return $this->hasOne( CustomerDetail::class, 'customers_id' );
    }
}