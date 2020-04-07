<?php
namespace Modules\Brookr\Providers;

use Tendoo\Core\Services\Options;
use Illuminate\Support\ServiceProvider;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;

class BrookrServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton( LoadsService::class, function() {
            return new LoadsService( 
                new TrucksService,
                app()->make( Options::class )
            );
        });
    }
}