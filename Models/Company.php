<?php 
namespace Modules\Brookr\Models;

use Modules\Brookr\Models\Driver;
use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\DriversDetail;

class Company extends Model
{
    protected $table = 'brookr_companies';

    public function drivers()
    {
        return $this->hasManyThrough( Driver::class, DriversDetail::class, 'company_id', 'id', 'id', 'driver_id' );
    }

    public function loads()
    {
        return $this->hasManyThrough( LoadDelivery::class, DriversDetail::class, 'company_id', 'driver_id', 'id', 'driver_id' );
    }

    public function fuels()
    {
        return $this->hasMany( CompanyFuelCharge::class, 'company_id' );
    }
}