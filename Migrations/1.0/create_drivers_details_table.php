<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateDriversDetailsTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_drivers_details' ) ) {
            Schema::create( 'brookr_drivers_details', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->integer( 'user_id' ); // points to the author id
                $table->integer( 'driver_id' ); // points to the user id
                $table->integer( 'company_id' );
                $table->boolean( 'sms_notifications' )->default(true)->nullable();
                $table->boolean( 'email_notifications' )->default(true)->nullable();
                $table->boolean( 'deduct_tools' )->default(true)->nullable();
                $table->boolean( 'deduct_fuel' )->default(true)->nullable();
                $table->string( 'first_name' )->nullable();
                $table->string( 'last_name' )->nullable();
                $table->string( 'phone_cell' )->nullable();
                $table->string( 'phone_home' )->nullable();
                $table->string( 'fuel_card' )->nullable();
                $table->string( 'ipass' )->nullable();
                $table->string( 'email' )->nullable();
                $table->string( 'status' )->default( 'active' );
                $table->text( 'comments' )->nullable();
                $table->datetime( 'birth_date' )->nullable();
                $table->string( 'ssn' )->nullable();
                $table->string( 'fein' )->nullable();
                $table->text( 'medical_card_url' )->nullable();
                $table->datetime( 'medical_card_expiration' )->nullable();
                $table->boolean( 'medical_drug_test' )->nullable();
                $table->float( 'dispatch_fees' )->nullable();
                $table->float( 'escrow_starting_balance' )->default(0);
                $table->text( 'personal_card_url' )->nullable();
                $table->datetime( 'work_hired_date' )->nullable();
                $table->datetime( 'work_terminated_date' )->nullable();
                $table->timestamps();
            });
        }

        if ( ! Schema::hasTable( 'brookr_drivers_groups' ) ) {
            Schema::create( 'brookr_drivers_groups', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string( 'name' );
                $table->text( 'description' )->nullable();
                $table->float( 'elog_fees' )->default(0);
                $table->float( 'insurance_fees' )->default(0);
                $table->float( 'fleet_one_fees' )->default(0);
                $table->float( 'complicance_fees' )->default(0);
                $table->integer( 'user_id' ); 
                $table->timestamps();
            });
        }

        if ( ! Schema::hasTable( 'brookr_drivers_payments' ) ) {
            Schema::create( 'brookr_drivers_payments', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->integer( 'driver_id' );
                $table->string( 'type' )->default( 'regular' ); // advance, regular
                $table->text( 'description' )->nullable();
                $table->float( 'amount' )->default(0);
                $table->integer( 'user_id' ); 
                $table->timestamps();
            });
        }

        if ( ! Schema::hasTable( 'brookr_drivers_expenses' ) ) {
            Schema::create( 'brookr_drivers_expenses', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->integer( 'driver_id' );
                $table->integer( 'load_id' );
                $table->text( 'description' )->nullable();
                $table->float( 'amount' )->default(0);
                $table->integer( 'user_id' ); 
                $table->timestamps();
            });
        }

        if ( ! Schema::hasTable( 'brookr_drivers_rents' ) ) {
            Schema::create( 'brookr_drivers_rents', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->integer( 'driver_id' );
                $table->string( 'trailer' );
                $table->datetime( 'week_starts' );
                $table->datetime( 'week_ends' );
                $table->text( 'description' )->nullable();
                $table->float( 'amount' )->default(0);
                $table->integer( 'user_id' ); 
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_drivers_details' ) ) {
            Schema::drop( 'brookr_drivers_details' );
        }
        if ( Schema::hasTable( 'brookr_drivers_groups' ) ) {
            Schema::drop( 'brookr_drivers_groups' );
        }
        if ( Schema::hasTable( 'brookr_drivers_payments' ) ) {
            Schema::drop( 'brookr_drivers_payments' );
        }
        if ( Schema::hasTable( 'brookr_drivers_expenses' ) ) {
            Schema::drop( 'brookr_drivers_expenses' );
        }
        if ( Schema::hasTable( 'brookr_drivers_rents' ) ) {
            Schema::drop( 'brookr_drivers_rents' );
        }
    }
}