<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAddressesTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_addresses' ) ) {
            Schema::create( 'brookr_addresses', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string( 'reference_type' ); // customers, drivers, loads, company
                $table->integer( 'reference_id' );
                $table->string( 'shipping_first_name' )->nullable();
                $table->string( 'shipping_second_name' )->nullable();
                $table->string( 'shipping_street_1' )->nullable();
                $table->string( 'shipping_street_2' )->nullable();
                $table->string( 'shipping_city' )->nullable();
                $table->string( 'shipping_zip' )->nullable();
                $table->string( 'shipping_state' )->nullable();
                $table->string( 'address_first_name' )->nullable();
                $table->string( 'address_second_name' )->nullable();
                $table->string( 'address_street_1' )->nullable();
                $table->string( 'address_street_2' )->nullable();
                $table->string( 'address_city' )->nullable();
                $table->string( 'address_zip' )->nullable();
                $table->string( 'address_state' )->nullable();
                $table->integer( 'user_id' );
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_addresses' ) ) {
            Schema::drop( 'brookr_addresses' );
        }
    }
}