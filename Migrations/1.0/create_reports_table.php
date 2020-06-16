<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportsTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_reports' ) ) {
            Schema::create( 'brookr_reports', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->datetime( 'range_start' );
                $table->datetime( 'range_end' );
                $table->float( 'total_loads' )->default(0)->nullable();
                $table->float( 'gross_earning' )->default(0)->nullable();
                $table->float( 'dispatch_fees' )->default(0)->nullable();
                $table->float( 'fuel_charge' )->default(0)->nullable();
                $table->float( 'driver_advance_payment' )->default(0)->nullable();
                $table->float( 'total_lumper_fees' )->default(0)->nullable();
                $table->float( 'total_escort_fees' )->default(0)->nullable();
                $table->float( 'total_additional_payment' )->default(0)->nullable();
                $table->float( 'driver_payment' )->default(0)->nullable();
                $table->float( 'net_earning' )->default(0)->nullable();
                $table->integer( 'user_id' );
                $table->integer( 'company_id' );
                $table->integer( 'available_drivers' )->nullable();
                $table->integer( 'available_trucks' )->nullable();
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_reports' ) ) {
            Schema::drop( 'brookr_reports' );
        }
    }
}