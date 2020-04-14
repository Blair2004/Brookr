<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class AfterCreateLoadEvent
{
    use SerializesModels;

    public $load;
    public $driver;
    public $truck;

    public function __construct( LoadDelivery $load, Driver $driver =null, Truck $truck =null )
    {
        $this->load     =   $load;
        $this->driver   =   $driver;
        $this->truck    =   $truck;
    }
}