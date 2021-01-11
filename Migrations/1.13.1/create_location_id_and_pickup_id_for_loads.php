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

class CreateLocationIdAndPickupIdForLoads extends Migration
{
    /**
     * Run the migrations.
     *
     * @return  void
     */
    public function up()
    {
        Schema::table( 'brookr_loads_delivery', function( Blueprint $table ) {
            if ( ! Schema::hasColumn( 'brookr_loads_delivery', 'pickup_location_id' ) ) {
                $table->integer( 'pickup_location_id' )->nullable();
            }
            if ( ! Schema::hasColumn( 'brookr_loads_delivery', 'delivery_location_id' ) ) {
                $table->integer( 'delivery_location_id' )->nullable();
            }
        });

        LoadDelivery::get()->each( function( $load ) {
            
            $location   =   Location::where( 'name', $load->pickup_city )->first();

            if ( $location instanceof Location ) {
                $load->pickup_location_id   =   $location->id;
            }

            $location   =   Location::where( 'name', $load->delivery_city )->first();

            if ( $location instanceof Location ) {
                $load->delivery_location_id   =   $location->id;
            }

            $load->save();
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
