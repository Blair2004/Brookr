<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoadsDeliveryTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_loads_delivery' ) ) {
            Schema::create( 'brookr_loads_delivery', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string( 'name' );
                $table->datetime( 'pickup_date' );
                $table->datetime( 'delivery_date' );
                $table->integer( 'brooker_id' );
                $table->string( 'load_reference' );
                $table->string( 'pickup_reference' );
                $table->integer( 'truck_id' )->nullable();
                $table->string( 'pickup_city' );
                $table->string( 'delivery_city' );
                $table->text( 'delivery_document_url' ); // Proof of Delivery
                $table->text( 'rate_document_url' ); // Proof of Delivery
                $table->integer( 'driver_id' )->nullable();
                $table->string( 'trailer_reference' )->nullable();
                $table->string( 'status' ); // pending, shipped, delivered
                $table->float( 'cost' );
                $table->integer( 'user_id' );
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_loads_delivery' ) ) {
            Schema::drop( 'brookr_loads_delivery' );
        }
    }
}