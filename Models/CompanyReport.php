<?php 
namespace Modules\Brookr\Models;

use Carbon\Carbon;
use Tendoo\Core\Models\User;
use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\DriversDetail;
use Modules\Brookr\Models\Scopes\DriversScope;

class CompanyReport extends Model
{
    protected $table = 'brookr_reports';

    public function scopeForRange( $query, $id, $driver_id, $start, $end )
    {
        return $query
            ->where( 'company_id', $id )
            ->where( 'driver_id', $driver_id )
            ->where( 'range_start', Carbon::parse( $start )->startOfDay()->toDateTimeString() )
            ->where( 'range_end', Carbon::parse( $end )->endOfDay()->toDateTimeString() );
    }
}