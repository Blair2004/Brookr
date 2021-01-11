<?php
/**
 * Table Migration
 * @package  5.0.1
**/

namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class SetReportIdAsOptional extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        Schema::table( 'brookr_companies_fuel_charges', function( Blueprint $table ) {
            $table->integer( 'report_id' )->nullable()->change();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return  void
     */
    public function down()
    {
        // drop tables here
    }
}
