<?php
namespace Modules\Brookr\Events;

use Tendoo\Core\Models\User;
use Modules\Brookr\Models\Driver;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\DriversDetail;
use Modules\Brookr\Models\LoadDelivery;

class BeforeUpdateDriverEvent
{
    use SerializesModels;

    public $driver;
    public $details;
    public $status;

    public function __construct( Driver $driver, DriversDetail $details, $status )
    {
        $this->driver       =   $driver;
        $this->details      =   $details;
        $this->status       =   $status;
    }
}