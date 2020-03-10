<?php
namespace Modules\Brookr\Migrations\v1_0;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrucksMaintenanceTable extends Migration
{
    public function up()
    {
        Schema::create( 'brookr_trucks_maintenance', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string( 'name' );
            $table->text( 'description' )->nullable();
            $table->integer( 'truck_id' );
            $table->text( 'document_url' );
            $table->integer( 'user_id' );
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop( 'brookr_trucks_maintenance' );
    }
}