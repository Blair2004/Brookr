<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateTrucksMaintenanceTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_trucks_maintenances' ) ) {
            Schema::create( 'brookr_trucks_maintenances', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string( 'name' );
                $table->text( 'description' )->nullable();
                $table->integer( 'truck_id' );
                $table->float( 'cost', 11, 5 )->default(0);
                $table->text( 'document_url' )->nullable();
                $table->integer( 'user_id' );
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_trucks_maintenances' ) ) {
            Schema::drop( 'brookr_trucks_maintenances' );
        }
    }
}