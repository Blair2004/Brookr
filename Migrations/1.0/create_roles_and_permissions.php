<?php
namespace Modules\Brookr\Migrations;

use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\Permission;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesAndPermissions extends Migration
{
    public function up()
    {
        if ( ! ( $driver = Role::namespace( 'brookr.driver' ) ) instanceof Role ) {
            $driver                 =   new Role;
            $driver->name           =   __( 'Driver' );
            $driver->namespace      =   'brookr.driver';
            $driver->description    =   __( 'Can pick and delivery loads.' );
            $driver->save();
        }

        if ( ! ( $dispatcher = Role::namespace( 'brookr.dispatcher' ) ) instanceof Role ) {
            $dispatcher             =   new Role;
            $dispatcher->name       =   __( 'Dispatcher' );
            $dispatcher->namespace  =   'brookr.dispatcher';
            $dispatcher->description    =   __( 'Can assign loads to drivers and manage the system' );
            $dispatcher->save();
        }

        if ( ! ( $customer = Role::namespace( 'brookr.customer' ) ) instanceof Role ) {
            $customer                   =   new Role;
            $customer->name             =   __( 'Customer' );
            $customer->namespace        =   'brookr.customer';
            $customer->description      =   __( 'Transfer Loads to the dispatcher.' );
            $customer->save();
        }

        if ( ! ( $canCreateTrucks = Permission::namespace( 'brookr.create.trucks' )->first() ) instanceof Permission ) {
            $canCreateTrucks               =   new Permission;
            $canCreateTrucks->name         =   __( 'Can create trucks' );
            $canCreateTrucks->namespace    =   'brookr.create.trucks';
            $canCreateTrucks->description   =   '';
            $canCreateTrucks->save();
        }

        if ( ! ( $canEditTrucks = Permission::namespace( 'brookr.edit.trucks' )->first() ) instanceof Permission ) {
            $canEditTrucks               =   new Permission;
            $canEditTrucks->name         =   __( 'Can edit trucks' );
            $canEditTrucks->namespace    =   'brookr.edit.trucks';
            $canEditTrucks->description     =   '';
            $canEditTrucks->save();
        }

        if ( ! ( $canDeleteTrucks = Permission::namespace( 'brookr.delete.trucks' )->first() ) instanceof Permission ) {
            $canDeleteTrucks               =   new Permission;
            $canDeleteTrucks->name         =   __( 'Can delete trucks' );
            $canDeleteTrucks->namespace    =   'brookr.delete.trucks';
            $canDeleteTrucks->description   =   '';
            $canDeleteTrucks->save();
        }

        if ( ! ( $canSeeTrucks = Permission::namespace( 'brookr.see.trucks' )->first() ) instanceof Permission ) {
            $canSeeTrucks               =   new Permission;
            $canSeeTrucks->name         =   __( 'Can see trucks' );
            $canSeeTrucks->namespace    =   'brookr.see.trucks';
            $canSeeTrucks->description  =   '';
            $canSeeTrucks->save();
        }

        if ( ! ( $canSeeTrucksRelatives = Permission::namespace( 'brookr.see.trucks-relatives' )->first() ) instanceof Permission ) {
            $canSeeTrucksRelatives               =   new Permission;
            $canSeeTrucksRelatives->name         =   __( 'Can see trucks relatives' );
            $canSeeTrucksRelatives->namespace    =   'brookr.see.trucks-relatives';
            $canSeeTrucksRelatives->description     =   '';
            $canSeeTrucksRelatives->save();
        }

        if ( ! ( $canCreateTrucksRelatives = Permission::namespace( 'brookr.create.trucks-relatives' )->first() ) instanceof Permission ) {
            $canCreateTrucksRelatives               =   new Permission;
            $canCreateTrucksRelatives->name         =   __( 'Can create trucks relatives' );
            $canCreateTrucksRelatives->namespace    =   'brookr.create.trucks-relatives';
            $canCreateTrucksRelatives->description  =   '';
            $canCreateTrucksRelatives->save();
        }

        if ( ! ( $canEditTruckRelatives = Permission::namespace( 'brookr.edit.trucks-relatives' )->first() ) instanceof Permission ) {
            $canEditTruckRelatives               =   new Permission;
            $canEditTruckRelatives->name         =   __( 'Can edit trucks relatives' );
            $canEditTruckRelatives->namespace    =   'brookr.edit.trucks-relatives';
            $canEditTruckRelatives->description     =   '';
            $canEditTruckRelatives->save();
        }

        if ( ! ( $canDeleteTrucksRelatives = Permission::namespace( 'brookr.delete.trucks-relatives' )->first() ) instanceof Permission ) {
            $canDeleteTrucksRelatives               =   new Permission;
            $canDeleteTrucksRelatives->name         =   __( 'Can delete trucks relatives' );
            $canDeleteTrucksRelatives->namespace    =   'brookr.delete.trucks-relatives';
            $canDeleteTrucksRelatives->description  =   '';
            $canDeleteTrucksRelatives->save();
        }

        if ( ! ( $canCreateLoads = Permission::namespace( 'brookr.create.loads' )->first() ) instanceof Permission ) {
            $canCreateLoads               =   new Permission;
            $canCreateLoads->name         =   __( 'Can create loads' );
            $canCreateLoads->namespace    =   'brookr.create.loads';
            $canCreateLoads->description    =   '';
            $canCreateLoads->save();
        }

        if ( ! ( $canChangeLoadsStatus = Permission::namespace( 'brookr.change.loads-status' )->first() ) instanceof Permission ) {
            $canChangeLoadsStatus               =   new Permission;
            $canChangeLoadsStatus->name         =   __( 'Can change loads status' );
            $canChangeLoadsStatus->namespace    =   'brookr.change.loads-status';
            $canChangeLoadsStatus->description  =   '';
            $canChangeLoadsStatus->save();
        }

        if ( ! ( $canSeeLoadsAssigned = Permission::namespace( 'brookr.see.loads-assigned' )->first() ) instanceof Permission ) {
            $canSeeLoadsAssigned               =   new Permission;
            $canSeeLoadsAssigned->name         =   __( 'Can see loads assigned' );
            $canSeeLoadsAssigned->namespace    =   'brookr.see.loads-assigned';
            $canSeeLoadsAssigned->description   =   '';
            $canSeeLoadsAssigned->save();
        }

        if ( ! ( $canEditLoads = Permission::namespace( 'brookr.edit.loads' )->first() ) instanceof Permission ) {
            $canEditLoads               =   new Permission;
            $canEditLoads->name         =   __( 'Can edit loads' );
            $canEditLoads->namespace    =   'brookr.edit.loads';
            $canEditLoads->description  =   '';
            $canEditLoads->save();
        }

        if ( ! ( $canDeleteLoads = Permission::namespace( 'brookr.delete.loads' )->first() ) instanceof Permission ) {
            $canDeleteLoads               =   new Permission;
            $canDeleteLoads->name         =   __( 'Can delete loads' );
            $canDeleteLoads->namespace    =   'brookr.delete.loads';
            $canDeleteLoads->description    =   '';
            $canDeleteLoads->save();
        }

        if ( ! ( $canSeeLoads = Permission::namespace( 'brookr.see.loads' )->first() ) instanceof Permission ) {
            $canSeeLoads               =   new Permission;
            $canSeeLoads->name         =   __( 'Can see loads' );
            $canSeeLoads->namespace    =   'brookr.see.loads';
            $canSeeLoads->description   =   '';
            $canSeeLoads->save();
        }

        if ( ! ( $canSeeCompanies = Permission::namespace( 'brookr.see.companies' )->first() ) instanceof Permission ) {
            $canSeeCompanies               =   new Permission;
            $canSeeCompanies->name         =   __( 'Can see companies' );
            $canSeeCompanies->namespace    =   'brookr.see.companies';
            $canSeeCompanies->description   =   '';
            $canSeeCompanies->save();
        }

        if ( ! ( $canCreateCompanies = Permission::namespace( 'brookr.create.companies' )->first() ) instanceof Permission ) {
            $canCreateCompanies               =   new Permission;
            $canCreateCompanies->name         =   __( 'Can create companies' );
            $canCreateCompanies->namespace    =   'brookr.create.companies';
            $canCreateCompanies->description   =   '';
            $canCreateCompanies->save();
        }

        if ( ! ( $canEditCompanies = Permission::namespace( 'brookr.edit.companies' )->first() ) instanceof Permission ) {
            $canEditCompanies               =   new Permission;
            $canEditCompanies->name         =   __( 'Can edit companies' );
            $canEditCompanies->namespace    =   'brookr.edit.companies';
            $canEditCompanies->description   =   '';
            $canEditCompanies->save();
        }

        if ( ! ( $canDeleteCompanies = Permission::namespace( 'brookr.delete.companies' )->first() ) instanceof Permission ) {
            $canDeleteCompanies               =   new Permission;
            $canDeleteCompanies->name         =   __( 'Can delete companies' );
            $canDeleteCompanies->namespace    =   'brookr.delete.companies';
            $canDeleteCompanies->description   =   '';
            $canDeleteCompanies->save();
        }

        if ( ! ( $canCreateCustomer = Permission::namespace( 'brookr.create.customers' )->first() ) instanceof Permission ) {
            $canCreateCustomer               =   new Permission;
            $canCreateCustomer->name         =   __( 'Can create customers' );
            $canCreateCustomer->namespace    =   'brookr.create.customers';
            $canCreateCustomer->description   =   '';
            $canCreateCustomer->save();
        }

        if ( ! ( $canSeeCustomers = Permission::namespace( 'brookr.see.customers' )->first() ) instanceof Permission ) {
            $canSeeCustomers               =   new Permission;
            $canSeeCustomers->name         =   __( 'Can see customers' );
            $canSeeCustomers->namespace    =   'brookr.see.customers';
            $canSeeCustomers->description   =   '';
            $canSeeCustomers->save();
        }

        if ( ! ( $canDeleteCustomers = Permission::namespace( 'brookr.delete.customers' )->first() ) instanceof Permission ) {
            $canDeleteCustomers               =   new Permission;
            $canDeleteCustomers->name         =   __( 'Can delete customers' );
            $canDeleteCustomers->namespace    =   'brookr.delete.customers';
            $canDeleteCustomers->description   =   '';
            $canDeleteCustomers->save();
        }

        if ( ! ( $canEditCustomers = Permission::namespace( 'brookr.edit.customers' )->first() ) instanceof Permission ) {
            $canEditCustomers               =   new Permission;
            $canEditCustomers->name         =   __( 'Can edit customers' );
            $canEditCustomers->namespace    =   'brookr.edit.customers';
            $canEditCustomers->description   =   '';
            $canEditCustomers->save();
        }

        if ( ! ( $canCreateDrivers = Permission::namespace( 'brookr.create.drivers' )->first() ) instanceof Permission ) {
            $canCreateDrivers               =   new Permission;
            $canCreateDrivers->name         =   __( 'Can create drivers' );
            $canCreateDrivers->namespace    =   'brookr.create.drivers';
            $canCreateDrivers->description   =   '';
            $canCreateDrivers->save();
        }

        if ( ! ( $canSeeDrivers = Permission::namespace( 'brookr.see.drivers' )->first() ) instanceof Permission ) {
            $canSeeDrivers               =   new Permission;
            $canSeeDrivers->name         =   __( 'Can see drivers' );
            $canSeeDrivers->namespace    =   'brookr.see.drivers';
            $canSeeDrivers->description   =   '';
            $canSeeDrivers->save();
        }

        if ( ! ( $canDeleteDrivers = Permission::namespace( 'brookr.delete.drivers' )->first() ) instanceof Permission ) {
            $canDeleteDrivers               =   new Permission;
            $canDeleteDrivers->name         =   __( 'Can delete drivers' );
            $canDeleteDrivers->namespace    =   'brookr.delete.drivers';
            $canDeleteDrivers->description   =   '';
            $canDeleteDrivers->save();
        }

        if ( ! ( $canEditDrivers = Permission::namespace( 'brookr.edit.drivers' )->first() ) instanceof Permission ) {
            $canEditDrivers               =   new Permission;
            $canEditDrivers->name         =   __( 'Can edit drivers' );
            $canEditDrivers->namespace    =   'brookr.edit.drivers';
            $canEditDrivers->description   =   '';
            $canEditDrivers->save();
        }

        if ( ! ( $editSettings = Permission::namespace( 'brookr.edit.settings' )->first() ) instanceof Permission ) {
            $editSettings               =   new Permission;
            $editSettings->name         =   __( 'Can Edit Brookr Settings' );
            $editSettings->namespace    =   'brookr.edit.settings';
            $editSettings->description   =   '';
            $editSettings->save();
        }

        if ( ! ( $canSeeDashboard = Permission::namespace( 'brookr.see.dashboard' )->first() ) instanceof Permission ) {
            $canSeeDashboard               =   new Permission;
            $canSeeDashboard->name         =   __( 'Can See Dashboard' );
            $canSeeDashboard->namespace    =   'brookr.see.dashboard';
            $canSeeDashboard->description   =   '';
            $canSeeDashboard->save();
        }

        if ( ! ( $canSeeLoadsAsDriver = Permission::namespace( 'brookr.see.drivers-loads' )->first() ) instanceof Permission ) {
            $canSeeLoadsAsDriver               =   new Permission;
            $canSeeLoadsAsDriver->name         =   __( 'Can See Loads as Driver' );
            $canSeeLoadsAsDriver->namespace    =   'brookr.see.drivers-loads';
            $canSeeLoadsAsDriver->description   =   '';
            $canSeeLoadsAsDriver->save();
        }

        if ( ! ( $canSeeAllReports = Permission::namespace( 'brookr.see.reports' )->first() ) instanceof Permission ) {
            $canSeeAllReports               =   new Permission;
            $canSeeAllReports->name         =   __( 'Can See All Reports' );
            $canSeeAllReports->namespace    =   'brookr.see.reports';
            $canSeeAllReports->description   =   '';
            $canSeeAllReports->save();
        }

        if ( ! ( $canSeePersonalReports = Permission::namespace( 'brookr.see.personnal-reports' )->first() ) instanceof Permission ) {
            $canSeePersonalReports               =   new Permission;
            $canSeePersonalReports->name         =   __( 'Can See Personal Report' );
            $canSeePersonalReports->namespace    =   'brookr.see.personal-reports';
            $canSeePersonalReports->description   =   '';
            $canSeePersonalReports->save();
        }

        /**
         * assign permission to the 
         * dispatcher
         */
        collect([ 
            $canSeeLoads, 
            $canDeleteLoads, 
            $canEditLoads, 
            $canCreateLoads, 
            $canChangeLoadsStatus,
            
            $canCreateTrucks, 
            $canEditTrucks, 
            $canSeeTrucks, 
            $canDeleteTrucks,

            $canCreateTrucksRelatives,
            $canSeeTrucksRelatives,
            $canEditTruckRelatives,
            $canDeleteTrucksRelatives,

            $canSeeCompanies,
            $canCreateCompanies,
            $canEditCompanies,
            $canDeleteCompanies,

            $canCreateCustomer,
            $canSeeCustomers,
            $canDeleteCustomers,
            $canEditCustomers,

            $canCreateDrivers,
            $canSeeDrivers,
            $canDeleteDrivers,
            $canEditDrivers,

            $editSettings,
            $canSeeDashboard,
            $canSeeAllReports,
        ])->each( function( $permission ) use ( $dispatcher ) {
            Role::addPermission( $dispatcher->namespace, $permission->namespace );
            Role::addPermission( 'admin', $permission->namespace );
        }); 

        /**
         * assign permission to the driver
         */
        collect([
            $canSeeTrucksRelatives,
            $canCreateTrucksRelatives,
            $canEditTruckRelatives,

            $canSeeLoadsAsDriver,
            $canSeePersonalReports,
        ])->each( function( $permission ) use ( $driver ) {
            Role::addPermission( $driver->namespace, $permission->namespace );
        });

        /**
         * let's modify existing
         * user table
         */
        if ( ! Schema::hasColumn( 'tendoo_users', 'brookr_avatar' ) ) {
            Schema::table( 'tendoo_users', function( $table ) {
                $table->string( 'brookr_driver_status' )->default( 'available' )->nullable();
                $table->string( 'brookr_avatar' )->nullable();
            });
        }
    }

    public function down()
    {
        $permissions    =   [
            'brookr.create.trucks',
            'brookr.edit.trucks',
            'brookr.delete.trucks',
            'brookr.see.trucks',
            
            'brookr.see.trucks-relatives',
            'brookr.see.trucks-relatives',
            'brookr.edit.trucks-relatives',
            'brookr.delete.trucks-relatives',

            'brookr.create.loads',
            'brookr.edit.loads',
            'brookr.delete.loads',
            'brookr.see.loads',
            'brookr.change.loads-status',

            'brookr.see.companies',
            'brookr.create.companies',
            'brookr.edit.companies',
            'brookr.delete.companies',

            'brookr.create.customers',
            'brookr.see.customers',
            'brookr.delete.customers',
            'brookr.edit.customers',

            'brookr.create.drivers',
            'brookr.see.drivers',
            'brookr.delete.drivers',
            'brookr.edit.drivers',

            'brookr.edit.settings',
            'brookr.see.dashboard',
            'brookr.see.reports',
        ];

        $driverPermissions  =   [
            'brookr.change.loads-status',
            'brookr.see.personal-reports',
            'brookr.see.drivers-loads',
            'brookr.create.trucks-relatives'
        ];

        $role   =   Role::namespace( 'brookr.dispatcher' );
        if ( $role instanceof Role ) {
            $role->removePermissions( $permissions );
            Role::namespace( 'admin' )->removePermissions( $permissions );
            $role->delete();
        }

        $role   =   Role::namespace( 'brookr.driver' );
        if ( $role instanceof Role ) {
            $role->removePermissions( $driverPermissions );
            $role->delete();
        } 

        if ( Schema::hasColumn( 'tendoo_users', 'brookr_avatar' ) ) {
            Schema::table( 'tendoo_users', function( $table ) {
                $table->dropColumn([ 'brookr_avatar' ]);
            });
        }
        
        if ( Schema::hasColumn( 'tendoo_users', 'brookr_driver_status' ) ) {
            Schema::table( 'tendoo_users', function( $table ) {
                $table->dropColumn([ 'brookr_driver_status' ]);
            });
        }

        collect( $permissions )->merge( $driverPermissions )->each( function( $namespace ) {
            $permission     =   Permission::where( 'namespace', $namespace )->first();
            if ( $permission instanceof Permission ) {
                $permission->delete();
            }
        });
    }
}