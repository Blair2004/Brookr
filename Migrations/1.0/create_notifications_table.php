<?php
namespace Modules\Brookr\Migrations;

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateNotificationsTable extends Migration
{
    public function up()
    {
        if ( ! Schema::hasTable( 'brookr_notifications' ) ) {
            Schema::create( 'brookr_notifications', function (Blueprint $table) {
                $table->bigIncrements('id');
                $table->string( 'title' );
                $table->text( 'description' );
                $table->text( 'actions' )->nullable();
                $table->string( 'action' )->nullable();
                $table->string( 'type' )->default( 'default' );
                $table->boolean( 'read' )->default( false );
                $table->integer( 'user_id' );
                $table->timestamps();
            });
        }
    }

    public function down()
    {
        if ( Schema::hasTable( 'brookr_notifications' ) ) {
            Schema::drop( 'brookr_notifications' );
        }
    }
}