<?php
Route::get( 'brookr/{chunk}', function( $chunk ) {
    if ( in_array( substr( $chunk, -2 ), [ 'js' ] ) ) {
        header("Content-type: text/javascript");
        echo file_get_contents( dirname( __FILE__ ) . '/../Public/brookr/' . $chunk );
    } else if ( in_array( substr( $chunk, -2 ), [ 'css' ] ) ) {
        header("Content-type: text/css");
        echo file_get_contents( dirname( __FILE__ ) . '/../Public/brookr/' . $chunk );
    }
})->where([
    'chunk' =>  '([a-zA-Z0-9])+(.js|.png|.css|.jpg)$'
]);

Route::get( 'assets', function() {
    header("Content-type: text/css");
    echo file_get_contents( dirname( __FILE__ ) . '/../Public/brookr/' . $chunk );
});

Route::prefix( 'brookr' )->group( function() {
    Route::get( '/', 'BrookrController@index' );
    Route::fallback( 'BrookrController@index' );
});