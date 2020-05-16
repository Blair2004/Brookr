<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCompaniesTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_companies' ) ) {
            Schema::create( 'brookr_companies', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string( 'name' );
                $table->string( 'dba' )->nullable();
                $table->string( 'mc' )->nullable();
                $table->string( 'fein' )->nullable();
                $table->string( 'fax' )->nullable();
                $table->string( 'phone' )->nullable();
                $table->string( 'email' )->nullable();
                $table->string( 'website' )->nullable();
                $table->string( 'ifta_license' )->nullable();
                $table->float( 'paid_rate', 15, 3 )->default(0)->nullable();
                $table->float( 'driver_rate', 15, 3 )->default(0)->nullable();
                $table->float( 'insurance_fees', 15, 3 )->default(0)->nullable();
                $table->float( 'elog_fees', 15, 3 )->default(0)->nullable();
                $table->float( 'compliance_fees', 15, 3 )->default(0)->nullable();
                $table->float( 'lumper_fees', 15, 3 )->default(0)->nullable();
                $table->float( 'escort_fees', 15, 3 )->default(0)->nullable();
                $table->float( 'detention_fees', 15, 3 )->default(0)->nullable();
                $table->float( 'tonu_fees', 15, 3 )->default(0)->nullable();
                $table->string( 'us_dot' )->nullable();
                $table->string( 'logo_url' )->nullable();
                $table->integer( 'user_id' ); 
                $table->timestamps();
            });
        }

        if ( ! Schema::hasTable( 'brookr_companies_payments' ) ) {
            Schema::create( 'brookr_companies_payments', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->integer( 'company_id' );
                $table->string( 'type' )->default( 'regular' ); // advance, regular
                $table->text( 'description' )->nullable();
                $table->float( 'amount' )->default(0);
                $table->integer( 'user_id' ); 
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_companies' ) ) {
            Schema::drop( 'brookr_companies' );
        }

        if ( Schema::hasTable( 'brookr_companies_payments' ) ) {
            Schema::drop( 'brookr_companies_payments' );
        }
    }
}