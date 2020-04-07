<?php
namespace Modules\Brookr\Providers;

use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Listeners\BrookrListener;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class BrookrEventSubscribeProvider extends ServiceProvider
{
    protected $subscribe    =   [
        BrookrListener::class
    ];
}