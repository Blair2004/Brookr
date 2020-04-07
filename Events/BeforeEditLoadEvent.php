<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class BeforeEditLoadEvent
{
    use SerializesModels;

    public $load;
    public $driver;
    public $truck;
    public $fields;

    public function __construct( LoadDelivery $load, Driver $driver, Truck $truck, $fields )
    {
        $this->load     =   $load;
        $this->driver   =   $driver;
        $this->truck    =   $truck;
        $this->fields   =   $fields;
    }
}