<?php
Route::middleware([ 'tendoo.auth' ])->group( function() {
    Route::post( 'api/brookr/trucks', 'TrucksController@saveTruck' );
    Route::post( 'api/brookr/loads', 'LoadsController@saveLoad' );
    Route::post( 'api/brookr/trucks-maintenance', 'TrucksController@saveMaintenance' );
    Route::post( 'api/brookr/drivers', 'DriversController@postDriver' );
    Route::post( 'api/brookr/customers', 'CustomersController@postCustomer' );
    Route::put( 'api/brookr/trucks/{id}', 'TrucksController@editTruck' );
    Route::put( 'api/brookr/loads/{id}', 'LoadsController@editLoad' );
    Route::put( 'api/brookr/trucks-maintenance/{id}', 'TrucksController@editMaintenance' );
    Route::put( 'api/brookr/drivers/{id}', 'DriversController@editDriver' );
    Route::put( 'api/brookr/customers/{id}', 'CustomersController@editCustomer' );
    Route::delete( 'api/brookr/trucks/{id}', 'TrucksController@deleteTruck' );
});