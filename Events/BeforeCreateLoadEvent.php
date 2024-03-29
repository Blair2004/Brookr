<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class BeforeCreateLoadEvent
{
    use SerializesModels;

    public $driver;
    public $details;
    public $fields;

    public function __construct( Driver $driver = null, Truck $truck = null, $fields )
    {
        $this->driver       =   $driver;
        $this->truck        =   $truck;
        $this->fields       =   $fields;
    }
}