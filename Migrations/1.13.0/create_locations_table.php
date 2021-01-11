<?php
/**
 * Table Migration
 * @package  5.0.1
**/

namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Models\Location;

include_once( dirname( __FILE__ ) . '/../../Models/Location.php' );
include_once( dirname( __FILE__ ) . '/../../Models/LoadDelivery.php' );

class CreateLocationsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_locations' ) ) {
            Schema::create( 'brookr_locations', function( Blueprint $table ) {
                $table->id();
                $table->string( 'name' );
                $table->text( 'descrition' )->nullable();
                $table->timestamps();
            });
        }

        $loads      =   LoadDelivery::get()->map( function( $load ) {
            return [
                $load->delivery_city,
                $load->pickup_city
            ];
        })
            ->flatten()
            ->unique()
            ->each( function( $name ) {
                $location           =   Location::where( 'name', $name )->first();

                if ( ! $location instanceof Location && ! empty( $name ) ) {
                    $location           =   new Location;
                    $location->name     =   $name;
                    $location->save();
                }
            });
    }

    /**
     * Reverse the migrations.
     *
     * @return  void
     */
    public function down()
    {
        Schema::dropIfExists( 'brookr_locations' );
    }
}
