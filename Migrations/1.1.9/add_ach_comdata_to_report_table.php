<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddAchComdataToReportTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'brookr_reports', 'total_ach_fees' ) ) {
            Schema::table( 'brookr_reports', function (Blueprint $table) {
                $table->integer( 'total_ach_fees' )->default(0);
            });
        }

        if ( ! Schema::hasColumn( 'brookr_reports', 'total_comdata_fees' ) ) {
            Schema::table( 'brookr_reports', function (Blueprint $table) {
                $table->integer( 'total_comdata_fees' )->default(0);
            });
        }

        if ( ! Schema::hasColumn( 'brookr_companies', 'comdata_fees' ) ) {
            Schema::table( 'brookr_companies', function (Blueprint $table) {
                $table->integer( 'comdata_fees' )->default(0);
            });
        }

        if ( ! Schema::hasColumn( 'brookr_companies', 'ach_fees' ) ) {
            Schema::table( 'brookr_companies', function (Blueprint $table) {
                $table->integer( 'ach_fees' )->default(0);
            });
        }
    }

    public function down()
    {
        if ( Schema::hasColumn( 'brookr_reports', 'total_ach_fees' ) ) {
            Schema::table( 'brookr_reports', function( Blueprint $table ) {
                $table->dropColumn( 'total_ach_fees' );
            });
        }

        if ( Schema::hasColumn( 'brookr_reports', 'total_comdata_fees' ) ) {
            Schema::table( 'brookr_reports', function( Blueprint $table ) {
                $table->dropColumn( 'total_comdata_fees' );
            });
        }
        
        if ( Schema::hasColumn( 'brookr_companies', 'comdata_fees' ) ) {
            Schema::table( 'brookr_companies', function( Blueprint $table ) {
                $table->dropColumn( 'comdata_fees' );
            });
        }
        
        if ( Schema::hasColumn( 'brookr_companies', 'ach_fees' ) ) {
            Schema::table( 'brookr_companies', function( Blueprint $table ) {
                $table->dropColumn( 'ach_fees' );
            });
        }
    }
}