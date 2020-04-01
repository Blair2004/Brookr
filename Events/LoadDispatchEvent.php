<?php
namespace Modules\Brookr\Events;

use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class LoadDispatchedEvent
{
    use SerializesModels;

    public $load;

    public function __construct( LoadDelivery $load )
    {
        $this->load     =   $load;
    }
}