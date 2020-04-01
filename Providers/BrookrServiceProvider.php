<?php
namespace Modules\Brookr\Providers;

use Illuminate\Support\ServiceProvider;
use Modules\Brookr\Services\LoadsService;

class BrookrServiceProvider extends ServiceProvider
{
    protected $subscribe    =   [
        EventsListener::class
    ];
    
    public function register()
    {
        $this->app->singleton( LoadsService::class, function() {
            new LoadsService( new TrucksService );
        });
    }
}