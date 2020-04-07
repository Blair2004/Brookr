<?php 
namespace Modules\Brookr\Models;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    protected $table = 'brookr_notifications';

    protected $cast     =   [
        'read'  =>  'boolean'
    ];
    
    public function scopeFor( $query, $id ) 
    {
        return $query->where( 'user_id', $id );
    }

    public function scopeExclude( $query, $ids )
    {
        return $query->whereNotIn( 'id', $ids );
    }

    public function user()
    {
        return $this->hasOne( User::class, 'id', 'user_id' );
    }
}