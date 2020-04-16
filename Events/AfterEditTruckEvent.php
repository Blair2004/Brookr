<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class AfterEditTruckEvent
{
    use SerializesModels;

    public $truck;

    public function __construct( Truck $truck )
    {
        $this->truck  =   $truck;
    }
}