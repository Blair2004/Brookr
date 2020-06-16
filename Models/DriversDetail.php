<?php 
namespace Modules\Brookr\Models;

use Illuminate\Database\Eloquent\Model;

class DriversDetail extends Model
{
    protected $table = 'brookr_drivers_details';

    protected $casts     =   [
        'sms_notifications'     =>  'boolean',
        'email_notifications'   =>  'boolean',
        'deduct_tools'          =>  'boolean',
        'deduct_fuel'           =>  'boolean',
        'medical_drug_test'     =>  'boolean',
    ];

    public function driver()
    {
        return $this->belongsTo( Driver::class, 'driver_id' );
    }

    public function company()
    {
        return $this->belongsTo( Company::class, 'company_id' );
    }
}