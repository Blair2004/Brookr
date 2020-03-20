<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrucksTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_trucks' ) ) {
            Schema::create( 'brookr_trucks', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string('name');
                $table->string('year')->nullable();
                $table->string('model')->nullable();
                $table->string('color')->nullable();
                $table->string('vin_number')->nullable()->unique();
                $table->string('license_number')->nullable();
                $table->datetime('purchase_date')->nullable();
                $table->string('purchase_mileage')->nullable();
                $table->float('purchase_price')->nullable();
                $table->string('truck_number')->nullable()->unique();
                $table->datetime('sold_date')->nullable();
                $table->float('sold_price')->nullable();
                $table->string('sold_mileage')->nullable();
                $table->text('description')->nullable();
                $table->text('thumbnail')->nullable();
                $table->string( 'status' )->default( 'available' ); // available, busy
                $table->integer( 'user_id' );
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_trucks' ) ) {
            Schema::drop( 'brookr_trucks' );
        }
    }
}