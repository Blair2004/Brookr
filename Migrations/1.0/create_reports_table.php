<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateReportsTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_reports' ) ) {
            Schema::create( 'brookr_reports', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string( 'week' );
                $table->integer( 'total_loads' );
                $table->integer( 'total_income' );
                $table->integer( 'available_drivers' );
                $table->integer( 'available_trucks' );
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_reports' ) ) {
            Schema::drop( 'brookr_reports' );
        }
    }
}