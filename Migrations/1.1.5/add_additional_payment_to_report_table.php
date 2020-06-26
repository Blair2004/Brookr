<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAdditionalPaymentToReportTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'brookr_reports', 'additional_payment' ) ) {
            Schema::table( 'brookr_reports', function (Blueprint $table) {
                $table->integer( 'additional_payment' )->default(0);
            });
        }
    }

    public function down()
    {
        if ( Schema::hasColumn( 'brookr_reports', 'additional_payment' ) ) {
            Schema::table( 'brookr_reports', function( Blueprint $table ) {
                $table->dropColumn( 'additional_payment' );
            });
        }
    }
}