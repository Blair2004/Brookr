<?php
Route::middleware([ 'tendoo.auth' ])->group( function() {
    Route::get( 'api/brookr/trucks', 'TrucksController@getTrucks' );
    Route::get( 'api/brookr/profile/avatar', 'SettingsController@getUserAvatar' );
    Route::get( 'api/brookr/drivers/medical-expiration', 'DriversController@getByMedicalCard' );
    Route::get( 'api/brookr/drivers/driver-expiration', 'DriversController@getByDriverCard' );
    Route::get( 'api/brookr/drivers/handle/{id}', 'DriversController@handleLoad' );
    Route::get( 'api/brookr/permissions', 'SettingsController@getPermissions' );
    Route::get( 'api/brookr/loads/unassigned', 'LoadsController@getUnassigned' );
    Route::post( 'api/brookr/dashboard/refresh', 'DashboardController@refresh' );
    Route::post( 'api/brookr/dashboard', 'DashboardController@getReport' );
    Route::post( 'api/brookr/trucks', 'TrucksController@saveTruck' );
    Route::post( 'api/brookr/companies', 'CompaniesController@saveCompany' );
    Route::post( 'api/brookr/loads', 'LoadsController@saveLoad' );
    Route::post( 'api/brookr/trucks-maintenances', 'TrucksController@saveMaintenance' );
    Route::post( 'api/brookr/drivers', 'DriversController@setDriver' );
    Route::post( 'api/brookr/customers', 'CustomersController@createCustomer' );
    Route::post( 'api/brookr/settings', 'SettingsController@saveSettings' );
    Route::post( 'api/brookr/profile/settings', 'SettingsController@saveProfileSettings' );
    Route::post( 'api/brookr/notifications', 'SettingsController@getNotifications' );
    Route::put( 'api/brookr/companies/{id}', 'CompaniesController@saveCompany' );
    Route::put( 'api/brookr/trucks/{id}', 'TrucksController@editTruck' );
    Route::put( 'api/brookr/loads/{id}', 'LoadsController@editLoad' );
    Route::put( 'api/brookr/loads/update-driver/{id}', 'LoadsController@updateLoadAssignation' );
    Route::put( 'api/brookr/loads/update-status/{id}', 'LoadsController@updateLoadStatus' );
    Route::put( 'api/brookr/trucks-maintenances/{id}', 'TrucksController@editMaintenance' );
    Route::put( 'api/brookr/drivers/{id}', 'DriversController@setDriver' );
    Route::put( 'api/brookr/customers/{id}', 'CustomersController@editCustomer' );    
    Route::delete( 'api/brookr/companies/{id}', 'CompaniesController@deleteCompany' );
    Route::delete( 'api/brookr/customers/{id}', 'CustomersController@deleteCustomer' );    
    Route::delete( 'api/brookr/notifications/{id}', 'SettingsController@deleteNotification' );
    Route::delete( 'api/brookr/trucks/{id}', 'TrucksController@deleteTruck' );
    Route::delete( 'api/brookr/loads/{id}', 'LoadsController@deleteLoad' );
    Route::delete( 'api/brookr/trucks-maintenances/{id}', 'TrucksController@deleteTruckMaintenance' );
    Route::delete( 'api/brookr/drivers/{id}', 'DriversController@deleteDriver' );
});