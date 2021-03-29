<?php
/**
 * Table Migration
 * @package  5.0.1
**/

namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class UpdateColumnsLength extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        Schema::table( 'brookr_dashboard', function( Blueprint $table ) {
            $table->float( 'total_incomes', 11, 5 )->change();
            $table->float( 'week_total_incomes', 11, 5 )->change();
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
