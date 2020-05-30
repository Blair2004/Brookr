<?php
Route::middleware([ 'tendoo.auth' ])->group( function() {
    Route::get( 'api/brookr/profile/avatar', 'SettingsController@getUserAvatar' );
    Route::get( 'api/brookr/permissions', 'SettingsController@getPermissions' );
    
    Route::delete( 'api/brookr/drivers/{id}', 'DriversController@deleteDriver' );
    Route::get( 'api/brookr/drivers/medical-expiration', 'DriversController@getByMedicalCard' );
    Route::put( 'api/brookr/drivers/{id}', 'DriversController@setDriver' )->where(['id' => '[0-9]+']);
    Route::post( 'api/brookr/drivers/payment/{driver_id}', 'DriversController@makeAdvancePayment' );
    Route::get( 'api/brookr/drivers/driver-expiration', 'DriversController@getByDriverCard' );
    Route::get( 'api/brookr/drivers/is-available', 'DriversController@checkDriverAvailability' );
    Route::post( 'api/brookr/drivers', 'DriversController@setDriver' );
    
    
    Route::post( 'api/brookr/dashboard/refresh', 'DashboardController@refresh' );
    Route::post( 'api/brookr/dashboard', 'DashboardController@getReport' );
    
    Route::get( 'api/brookr/trucks', 'TrucksController@getTrucks' );
    Route::post( 'api/brookr/trucks', 'TrucksController@saveTruck' );
    Route::put( 'api/brookr/trucks/{id}', 'TrucksController@editTruck' )->where(['id' => '[0-9]+']);
    Route::delete( 'api/brookr/trucks/{id}', 'TrucksController@deleteTruck' )->where(['id' => '[0-9]+']);
    Route::delete( 'api/brookr/trucks-maintenances/{id}', 'TrucksController@deleteTruckMaintenance' );
    Route::post( 'api/brookr/trucks-maintenances', 'TrucksController@saveMaintenance' );
    Route::put( 'api/brookr/trucks-maintenances/{id}', 'TrucksController@editMaintenance' );
    
    Route::post( 'api/brookr/customers', 'CustomersController@createCustomer' );
    Route::put( 'api/brookr/customers/{id}', 'CustomersController@editCustomer' );    
    Route::delete( 'api/brookr/customers/{id}', 'CustomersController@deleteCustomer' );    

    Route::post( 'api/brookr/settings', 'SettingsController@saveSettings' );
    Route::post( 'api/brookr/profile/settings', 'SettingsController@saveProfileSettings' );
    Route::post( 'api/brookr/notifications', 'SettingsController@getNotifications' );

    Route::get( 'api/brookr/loads/unassigned', 'LoadsController@getUnassigned' );
    Route::post( 'api/brookr/loads/start/{id}', 'LoadsController@startDelivery' );
    Route::get( 'api/brookr/loads/awaiting/{id}', 'LoadsController@awaitingLoadDelivery' );
    Route::post( 'api/brookr/loads/stop/{id}', 'LoadsController@stopDelivery' );
    Route::post( 'api/brookr/loads', 'LoadsController@saveLoad' );
    Route::put( 'api/brookr/loads/self-assign/{id}', 'LoadsController@selfAssignDriver' );
    Route::post( 'api/brookr/loads/edit/{id}', 'LoadsController@editLoad' );
    Route::put( 'api/brookr/loads/update-driver/{id}', 'LoadsController@updateLoadAssignation' );
    Route::put( 'api/brookr/loads/update-status/{id}', 'LoadsController@updateLoadStatus' );
    Route::delete( 'api/brookr/loads/{id}', 'LoadsController@deleteLoad' );
    Route::get( 'api/brookr/loads/doc/{id}/{namespace}', 'LoadsController@getDocumentLink' );

    Route::delete( 'api/brookr/notifications/{id}', 'SettingsController@deleteNotification' );

    Route::post( 'api/brookr/companies', 'CompaniesController@saveCompany' );
    Route::put( 'api/brookr/companies/{id}', 'CompaniesController@saveCompany' );
    Route::post( 'api/brookr/companies/payment/{id}', 'CompaniesController@advancePayment' );
    Route::delete( 'api/brookr/companies/{id}', 'CompaniesController@deleteCompany' );
});