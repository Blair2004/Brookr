<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateFuelsChargesTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_companies_fuel_charges' ) ) {
            Schema::create( 'brookr_companies_fuel_charges', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->integer( 'company_id' );
                $table->float( 'amount' )->default(0);
                $table->text( 'description' )->nullable();
                $table->integer( 'user_id' );
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_companies_fuel_charges' ) ) {
            Schema::drop( 'brookr_companies_fuel_charges' );
        }
    }
}