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
                $table->integer( 'brooker_id' )->nullable();
                $table->string( 'load_reference' )->nullable();
                $table->string( 'pickup_reference' )->nullable();
                $table->string( 'empty_trailer' )->nullable();
                $table->string( 'drop_trailer' )->nullable();
                $table->integer( 'truck_id' )->nullable();
                $table->string( 'pickup_city' )->nullable();
                $table->string( 'delivery_city' )->nullable();
                $table->text( 'delivery_document_url' )->nullable(); // Proof of Delivery
                $table->text( 'rate_document_url' )->nullable(); // Proof of Delivery
                $table->integer( 'driver_id' )->nullable();
                $table->string( 'trailer_reference' )->nullable();
                $table->string( 'status' ); // pending, shipped, delivered
                $table->float( 'cost' )->default(0);
                $table->boolean( 'visible' )->default(false);
                $table->float( 'escort_fees' )->default(0);
                $table->float( 'lumper_fees' )->default(0);
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