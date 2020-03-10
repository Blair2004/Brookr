<?php
namespace Modules\Brookr\Migrations\v1_0;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrucksTable extends Migration
{
    public function up()
    {
        Schema::create( 'brookr_trucks', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('year')->nullable();
            $table->string('model')->nullable();
            $table->string('color')->nullable();
            $table->string('vin_number')->nullable();
            $table->string('license_number')->nullable();
            $table->datetime('purchase_date')->nullable();
            $table->string('purchase_mileage')->nullable();
            $table->float('price')->nullable();
            $table->string('truck_number')->nullable();
            $table->datetime('sold_date')->nullable();
            $table->float('sold_price')->nullable();
            $table->string('sold_mileage')->nullable();
            $table->text('description')->nullable();
            $table->text('thumbnail')->nullable();
            $table->integer( 'user_id' );
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop( 'brookr_trucks' );
    }
}