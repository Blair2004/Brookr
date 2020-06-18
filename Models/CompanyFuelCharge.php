<?php 
namespace Modules\Brookr\Models;

use Modules\Brookr\Models\Driver;
use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\DriversDetail;

class CompanyFuelCharge extends Model
{
    protected $table = 'brookr_companies_fuel_charges';

    public function company()
    {
        return $this->belongsTo( Company::class );
    }
}