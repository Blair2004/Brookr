<?php
namespace Modules\Brookr\Migrations\v1_0;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoadsDeliveryTable extends Migration
{
    public function up()
    {
        Schema::create( 'brookr_loads_delivery_history', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->datetime( 'action_time' )->nullable();
            $table->string( 'action_type' )->nullable(); // delivery, pickup
            $table->string( 'city' );
            $table->string( 'street' );
            $table->string( 'zip' );
            $table->integer( 'user_id' ); // must be reference to driver
            $table->integer( 'load_id' ); // must be unique
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop( 'brookr_loads_delivery_history' );
    }
}