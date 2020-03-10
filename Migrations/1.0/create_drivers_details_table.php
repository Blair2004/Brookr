<?php
namespace Modules\Brookr\Migrations\v1_0;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDriverDetailsTable extends Migration
{
    public function up()
    {
        Schema::create( 'brookr_drivers_details', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->integer( 'user_id' ); // points to the author id
            $table->integer( 'driver_id' ); // points to the user id
            $table->boolean( 'company_driver' )->default(true);
            $table->boolean( 'sms_notifications' )->default(true);
            $table->boolean( 'email_notifications' )->default(true);
            $table->boolean( 'deduct_tools' )->default(true);
            $table->boolean( 'deduct_fuel' )->default(true);
            $table->string( 'first_name' )->nullable();
            $table->string( 'last_name' )->nullable();
            $table->string( 'phone_cell' )->nullable();
            $table->string( 'phone_home' )->nullable();
            $table->string( 'fuel_card' )->nullable();
            $table->string( 'ipass' )->nullable();
            $table->string( 'email' )->nullable();
            $table->string( 'status' )->default( 'active' );
            $table->text( 'comments' )->default( 'active' );
            $table->datetime( 'birth_date' )->nullable();
            $table->string( 'ssn' )->nullable();
            $table->string( 'fein' )->nullable();
            $table->string( 'company_name' )->nullable();
            $table->string( 'company_street_1' )->nullable();
            $table->string( 'company_street_2' )->nullable();
            $table->string( 'company_city' )->nullable();
            $table->string( 'company_state' )->nullable();
            $table->string( 'company_zip' )->nullable();
            $table->string( 'address_street_1' )->nullable();
            $table->string( 'address_street_2' )->nullable();
            $table->string( 'address_city' )->nullable();
            $table->string( 'address_state' )->nullable();
            $table->string( 'address_zip' )->nullable();
            $table->text( 'medical_card_url' )->nullable();
            $table->datetime( 'medical_card_expiration' )->nullable();
            $table->boolean( 'medical_drug_test' )->nullable();
            $table->float( 'escrow_starting_balance' )->default(0);
            $table->text( 'personal_card_url' )->nullable();
            $table->datetime( 'work_hired_date' )->nullable();
            $table->datetime( 'work_termination_date' )->nullable();
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::drop( 'brookr_drivers_details' );
    }
}