<?php 
namespace Modules\Brookr\Models;

use Modules\Brookr\Models\Driver;
use Illuminate\Database\Eloquent\Model;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\DriversDetail;

class Location extends Model
{
    protected $table = 'brookr_locations';
}