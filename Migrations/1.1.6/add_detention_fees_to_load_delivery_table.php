<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddDetentionFeesToLoadDeliveryTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasColumn( 'brookr_loads_delivery', 'detention_fees' ) ) {
            Schema::table( 'brookr_loads_delivery', function (Blueprint $table) {
                $table->integer( 'detention_fees' )->default(0);
            });
        }
    }

    public function down()
    {
        if ( Schema::hasColumn( 'brookr_loads_delivery', 'detention_fees' ) ) {
            Schema::table( 'brookr_loads_delivery', function( Blueprint $table ) {
                $table->dropColumn( 'detention_fees' );
            });
        }
    }
}