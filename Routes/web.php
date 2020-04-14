<?php
Route::get( 'brookr', 'BrookrController@index' );
Route::get( 'brookr/{chunk}', function( $chunk ) {
    if ( in_array( substr( $chunk, -2 ), [ 'js', 'css' ] ) ) {
        header("Content-type: text/javascript");
        echo file_get_contents( dirname( __FILE__ ) . '/../Public/brookr/' . $chunk );
    }
});