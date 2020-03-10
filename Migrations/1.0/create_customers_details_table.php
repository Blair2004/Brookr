<?php
namespace Modules\Brookr\Migrations\v1_0;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateCustomersDetailsTable extends Migration
{
    public function up()
    {
        Schema::create( 'brookr_customers_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer( 'user_id' ); // points to the author id
            $table->integer( 'customers_id' ); // points to the user id
            $table->string( 'name' )->nullable();
            $table->string( 'dba' )->nullable();
            $table->string( 'first_name' )->nullable();
            $table->string( 'last_name' )->nullable();
            $table->string( 'display_name' )->nullable();
            $table->string( 'short_name' )->nullable();
            $table->string( 'mc_ff' )->nullable();
            $table->string( 'fein_ssn' )->nullable();
            $table->string( 'us_dot' )->nullable();
            $table->string( 'scac' )->nullable();
            $table->string( 'mailing_bill_to' )->nullable();
            $table->string( 'mailing_attention' )->nullable();
            $table->string( 'mailing_street_1' )->nullable();
            $table->string( 'mailing_street_2' )->nullable();
            $table->string( 'mailing_city' )->nullable();
            $table->string( 'mailing_zip' )->nullable();
            $table->string( 'address_bill_to' )->nullable();
            $table->string( 'address_attention' )->nullable();
            $table->string( 'address_street_1' )->nullable();
            $table->string( 'address_street_2' )->nullable();
            $table->string( 'address_city' )->nullable();
            $table->string( 'address_zip' )->nullable();
            $table->boolean( 'active' )->default(true);
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop( 'brookr_customers_details' );
    }
}