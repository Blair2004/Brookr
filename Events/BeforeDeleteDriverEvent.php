<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class BeforeDeleteDriverEvent
{
    use SerializesModels;

    public $driver;

    public function __construct( Driver $driver )
    {
        $this->driver     =   $driver;
    }
}