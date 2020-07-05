<?php
Route::middleware([ 'tendoo.auth' ])->group( function() {
    Route::get( 'api/brookr/profile/avatar', 'SettingsController@getUserAvatar' );
    Route::get( 'api/brookr/permissions', 'SettingsController@getPermissions' );
    
    Route::delete( 'api/brookr/drivers/{id}', 'DriversController@deleteDriver' );
    Route::get( 'api/brookr/drivers/medical-expiration', 'DriversController@getByMedicalCard' );
    Route::put( 'api/brookr/drivers/{id}', 'DriversController@setDriver' )->where(['id' => '[0-9]+']);
    Route::get( 'api/brookr/drivers/{id}/assets/{namespace}', 'DriversController@downloadAssets' );
    Route::post( 'api/brookr/drivers/payments/{driver_id}', 'DriversController@makeAdvancePayment' );
    Route::put( 'api/brookr/drivers/payments/{driver_id}', 'DriversController@updatePayment' );
    Route::delete( 'api/brookr/drivers/payments/{payment_id}', 'DriversController@deleteDriverPayment' );
    Route::get( 'api/brookr/drivers/payments/{driver_id}', 'DriversController@getDriverPayment' );
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
    Route::get( 'api/brookr/loads/unassign/{id}', 'LoadsController@unassignDriverToLoad' );
    Route::post( 'api/brookr/loads/start/{id}', 'LoadsController@startDelivery' );
    Route::get( 'api/brookr/loads/awaiting/{id}', 'LoadsController@awaitingLoadDelivery' );
    Route::post( 'api/brookr/loads/stop/{id}', 'LoadsController@stopDelivery' );
    Route::post( 'api/brookr/loads', 'LoadsController@saveLoad' );
    Route::get( 'api/brookr/loads/email/{namespace}/{load}', 'LoadsController@notifyEmail' );
    Route::put( 'api/brookr/loads/self-assign/{id}', 'LoadsController@selfAssignDriver' );
    Route::post( 'api/brookr/loads/edit/{id}', 'LoadsController@editLoad' );
    Route::put( 'api/brookr/loads/update-driver/{id}', 'LoadsController@updateLoadAssignation' );
    Route::put( 'api/brookr/loads/update-status/{id}', 'LoadsController@updateLoadStatus' );
    Route::delete( 'api/brookr/loads/{id}', 'LoadsController@deleteLoad' );
    Route::get( 'api/brookr/loads/{load}/history', 'LoadsController@getLoadHistory' );
    Route::get( 'api/brookr/loads/{id}/assets/{namespace}', 'LoadsController@getDocumentLink' );

    Route::post( 'api/brookr/medias/upload', 'SettingsController@uploadMedia' );

    Route::delete( 'api/brookr/notifications/{id}', 'SettingsController@deleteNotification' );

    Route::post( 'api/brookr/companies', 'CompaniesController@saveCompany' );
    Route::post( 'api/brookr/companies/report', 'CompaniesController@getCompanyReport' );
    Route::get( 'api/brookr/companies', 'CompaniesController@getCompanies' );
    Route::put( 'api/brookr/companies/{id}', 'CompaniesController@saveCompany' );
    Route::get( 'api/brookr/companies/{id}/drivers', 'CompaniesController@getCompanyDrivers' );
    Route::post( 'api/brookr/companies/{id}/fuel', 'CompaniesController@recordFuelExpense' );
    Route::delete( 'api/brookr/companies/fuel/{id}', 'CompaniesController@deleteFuelRecord' );
    Route::post( 'api/brookr/companies/get-fuels', 'CompaniesController@getFuelExpenses' );
    Route::post( 'api/brookr/companies/payment/{id}', 'CompaniesController@advancePayment' );
    Route::delete( 'api/brookr/companies/{id}', 'CompaniesController@deleteCompany' );
});