<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTotalExpensesToReportTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'brookr_reports', 'net_after_dispatch' ) ) {
            Schema::table( 'brookr_reports', function (Blueprint $table) {
                $table->float( 'net_after_dispatch' )->default(0);
                $table->float( 'total_expenses' )->default(0);
                $table->float( 'total_insurance_fees' )->default(0);
                $table->float( 'total_elog_fees' )->default(0);
                $table->float( 'total_compliance_fees' )->default(0);
                $table->float( 'total_detention_fees' )->default(0);
                $table->float( 'total_tonu_fees' )->default(0);
            });
        }
    }

    public function down()
    {
        if ( Schema::hasColumn( 'brookr_reports', 'total_expenses' ) ) {
            Schema::table( 'brookr_reports', function( Blueprint $table ) {
                $table->dropColumn( 'net_after_dispatch' );
                $table->dropColumn( 'total_expenses' );
                $table->dropColumn( 'total_insurance_fees' );
                $table->dropColumn( 'total_elog_fees' );
                $table->dropColumn( 'total_compliance_fees' );
                $table->dropColumn( 'total_detention_fees' );
                $table->dropColumn( 'total_tonu_fees' );
            });
        }
    }
}