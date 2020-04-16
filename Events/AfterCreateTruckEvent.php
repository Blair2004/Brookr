<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Truck;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class AfterCreateTruckEvent
{
    use SerializesModels;

    public $truck;

    public function __construct( Truck $truck )
    {
        $this->truck     =   $truck;
    }
}