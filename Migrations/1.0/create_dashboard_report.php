<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDashboardReport extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_dashboard' ) ) {
            Schema::create( 'brookr_dashboard', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->float( 'total_loads' )->default(0);
                $table->float( 'ongoing_loads' )->default(0);
                $table->float( 'pending_loads' )->default(0);
                $table->float( 'total_incomes' )->default(0);
                $table->float( 'total_drivers' )->default(0);
                $table->float( 'available_drivers' )->default(0);
                $table->float( 'unassigned_drivers' )->default(0);
                $table->float( 'unavailable_drivers' )->default(0);
                $table->float( 'total_trucks' )->default(0);
                $table->float( 'available_trucks' )->default(0);
                $table->float( 'assigned_trucks' )->default(0);
                $table->datetime( 'from_date' );
                $table->datetime( 'to_date' );
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_dashboard' ) ) {
            Schema::drop( 'brookr_dashboard' );
        }
    }
}