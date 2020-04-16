<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Truck;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class BeforeCreateTruckEvent
{
    use SerializesModels;

    public $fields;

    public function __construct( $fields )
    {
        $this->fields     =   $fields;
    }
}