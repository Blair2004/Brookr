<?php
namespace Modules\Brookr\Providers;

use Tendoo\Core\Services\Options;
use Tendoo\Core\Services\DateService;
use Illuminate\Support\ServiceProvider;
use Modules\Brookr\Services\LoadsService;
use Modules\Brookr\Services\TrucksService;
use Modules\Brookr\Services\DriversService;
use Modules\Brookr\Services\DashboardService;

class BrookrServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->singleton( LoadsService::class, function() {
            return new LoadsService( 
                new TrucksService,
                new DriversService,
                app()->make( Options::class )
            );
        });

        $this->app->singleton( DashboardService::class, function() {
            return new DashboardService( 
                app()->make( DateService::class )
            );
        });
    }
}