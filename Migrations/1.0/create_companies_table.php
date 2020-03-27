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
                $table->string( 'us_dot' )->nullable();
                $table->string( 'logo_url' )->nullable();
                $table->string( 'mailing_bil_to' )->nullable();
                $table->string( 'mailing_attention' )->nullable();
                $table->string( 'mailing_street_1' )->nullable();
                $table->string( 'mailing_street_2' )->nullable();
                $table->string( 'mailing_city' )->nullable();
                $table->string( 'mailing_zip' )->nullable();
                $table->string( 'mailing_state' )->nullable();
                $table->string( 'address_attention' )->nullable();
                $table->string( 'address_street_1' )->nullable();
                $table->string( 'address_street_2' )->nullable();
                $table->string( 'address_city' )->nullable();
                $table->string( 'address_zip' )->nullable();
                $table->string( 'address_state' )->nullable();
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
    }
}