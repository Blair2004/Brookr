<?php
Route::middleware([ 'tendoo.auth' ])->group( function() {
    Route::post( 'api/brookr/trucks', 'TrucksController@saveTruck' );
});