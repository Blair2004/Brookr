<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoadsDeliveryHistoryTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_loads_delivery_history' ) ) {
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
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_loads_delivery_history' ) ) {
            Schema::drop( 'brookr_loads_delivery_history' );
        }
    }
}