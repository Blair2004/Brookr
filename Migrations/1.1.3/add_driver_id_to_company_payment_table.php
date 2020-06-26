<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDriverIdToCompanyPaymentTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'brookr_companies_fuel_charges', 'driver_id' ) ) {
            Schema::table( 'brookr_companies_fuel_charges', function (Blueprint $table) {
                $table->integer( 'driver_id' );
            });
        }
    }

    public function down()
    {
        if ( Schema::hasColumn( 'brookr_companies_fuel_charges', 'driver_id' ) ) {
            Schema::table( 'brookr_companies_fuel_charges', function( Blueprint $table ) {
                $table->dropColumn( 'driver_id' );
            });
        }
    }
}