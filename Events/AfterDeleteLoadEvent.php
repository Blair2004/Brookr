<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Truck;
use Modules\Brookr\Models\Driver;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class AfterDeleteLoadEvent
{
    use SerializesModels;

    public $load_id;

    public function __construct( int $load_id )
    {
        $this->load_id  =   $load_id;
    }
}