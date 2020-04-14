<?php 
namespace Modules\Brookr\Models;

use Illuminate\Database\Eloquent\Model;

class Dashboard extends Model
{
    protected $table = 'brookr_dashboard';

    protected $casts    =   [
        'total_loads' => 'number',
        'ongoing_loads' => 'number',
        'pending_loads' => 'number',
        'total_incomes' => 'number',
        'total_drivers' => 'number',
        'available_drivers' => 'number',
        'unassigned_drivers' => 'number',
        'unavailable_drivers' => 'number',
        'total_trucks' => 'number',
        'available_trucks' => 'number',
        'assigned_trucks' => 'number',
    ];

    public function scopeRange( $query, $from, $to )
    {
        return $query->where( 'from_date', $from )
            ->where( 'to_date', $to )
            ->first();
    }
}