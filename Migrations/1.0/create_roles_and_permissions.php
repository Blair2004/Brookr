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
        if ( ! ( $driver = Role::namespace( 'brookr.driver' )->first() ) instanceof Role ) {
            $driver                 =   new Role;
            $driver->name           =   __( 'Driver' );
            $driver->namespace      =   'brookr.driver';
            $driver->description    =   __( 'Can pick and delivery loads.' );
            $driver->save();
        }

        if ( ! ( $dispatcher = Role::namespace( 'brookr.dispatcher' )->first() ) instanceof Role ) {
            $dispatcher             =   new Role;
            $dispatcher->name       =   __( 'Dispatcher' );
            $dispatcher->namespace  =   'brookr.dispatcher';
            $dispatcher->description    =   __( 'Can assign loads to drivers and manage the system' );
            $dispatcher->save();
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

        if ( ! ( $canCreateTrucksRelatives = Permission::namespace( 'brookr.see.trucks-relatives' )->first() ) instanceof Permission ) {
            $canCreateTrucksRelatives               =   new Permission;
            $canCreateTrucksRelatives->name         =   __( 'Can create trucks relatives' );
            $canCreateTrucksRelatives->namespace    =   'brookr.see.trucks-relatives';
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
            $canDeleteTrucksRelatives
        ])->each( function( $permission ) use ( $dispatcher ) {
            Role::addPermission( $dispatcher->namespace, $permission->namespace );
        }); 

        /**
         * assign permission to the driver
         */
        collect([
            $canSeeLoadsAssigned,
            $canChangeLoadsStatus,
            
            $canSeeTrucksRelatives,
            $canCreateTrucksRelatives,
            $canEditTruckRelatives,
        ])->each( function( $permission ) use ( $driver ) {
            Role::addPermission( $driver->namespace, $permission->namespace );
        });
    }

    public function down()
    {
        collect([
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
            'brookr.change.loads-status'
        ])->each( function( $permission ) {
            Role::RemovePermissions( 'brookr.dispatcher', $permission );
        });

        Role::namespace( 'brookr.dispatcher' )->delete();

        collect([
            'brookr.change.loads-status'
        ])->each( function( $permission ) {
            Role::RemovePermissions( 'brookr.driver', $permission );
        });
    }
}