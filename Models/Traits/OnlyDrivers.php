<?php
namespace Modules\Brookr\Models\Traits;

use Modules\Brookr\Models\Scopes\DriversScope;

trait OnlyDrivers {
    public static function bootOnlyDrivers()
    {
        static::addGlobalScopes( new DriversScope );
    }
}