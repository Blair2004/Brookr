<?php
namespace Modules\Brookr\Migrations\v1_0;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateLoadsDeliveryTable extends Migration
{
    public function up()
    {
        Schema::create( 'brookr_loads_delivery', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->datetime( 'pickup_date' );
            $table->integer( 'brooker_id' );
            $table->string( 'load_reference' );
            $table->string( 'pickup_reference' );
            $table->integer( 'pickup_city_id' );
            $table->integer( 'destination_city_id' );
            $table->text( 'delivery_document_url' ); // Proof of Delivery
            $table->text( 'rate_document_url' ); // Proof of Delivery
            $table->integer( 'driver_id' )->nullable();
            $table->string( 'trailer_reference' )->nullable();
            $table->status( 'pending' ); // pending, shipped, delivered
            $table->float( 'cost' );
            $table->integer( 'user_id' );
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop( 'brookr_loads_delivery' );
    }
}