<?php
namespace Modules\Brookr\Events;

use Modules\Brookr\Models\Driver;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\DriverDetail;
use Modules\Brookr\Models\LoadDelivery;

class BeforeUpdateDriverEvent
{
    use SerializesModels;

    public $driver;
    public $details;
    public $status;

    public function __construct( Driver $driver, DriverDetail $details, $status )
    {
        $this->driver       =   $driver;
        $this->details      =   $details;
        $this->status       =   $status;
    }
}