<?php
namespace Modules\Brookr\Migrations\v1_0;

use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\Permission;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRolesAndPermissions extends Migration
{
    public function up()
    {
        $driver                 =   new Role;
        $driver->name           =   __( 'Driver' );
        $driver->namespace      =   'brookr.driver';
        $driver->description    =   __( 'Can pick and delivery loads.' );
        $driver->save();

        $dispatcher             =   new Role;
        $dispatcher->name       =   __( 'Dispatcher' );
        $dispatcher->namespace  =   'brookr.dispatcher';
        $dispatcher->description    =   __( 'Can assign loads to drivers and manage the system' );
        $dispatcher->save();

        $canCreateTrucks               =   new Permission;
        $canCreateTrucks->name         =   __( 'Can create trucks' );
        $canCreateTrucks->namespace    =   'brookr.create.trucks';
        $canCreateTrucks->save();

        $canEditTrucks               =   new Permission;
        $canEditTrucks->name         =   __( 'Can edit trucks' );
        $canEditTrucks->namespace    =   'brookr.edit.trucks';
        $canEditTrucks->save();

        $canDeleteTrucks               =   new Permission;
        $canDeleteTrucks->name         =   __( 'Can delete trucks' );
        $canDeleteTrucks->namespace    =   'brookr.delete.trucks';
        $canDeleteTrucks->save();

        $canSeeTrucks               =   new Permission;
        $canSeeTrucks->name         =   __( 'Can see trucks' );
        $canSeeTrucks->namespace    =   'brookr.see.trucks';
        $canSeeTrucks->save();

        $canSeeTrucksRelatives               =   new Permission;
        $canSeeTrucksRelatives->name         =   __( 'Can see trucks relatives' );
        $canSeeTrucksRelatives->namespace    =   'brookr.see.trucks-relatives';
        $canSeeTrucksRelatives->save();

        $canCreateTrucksRelatives               =   new Permission;
        $canCreateTrucksRelatives->name         =   __( 'Can create trucks relatives' );
        $canCreateTrucksRelatives->namespace    =   'brookr.see.trucks-relatives';
        $canCreateTrucksRelatives->save();

        $canEditTruckRelatives               =   new Permission;
        $canEditTruckRelatives->name         =   __( 'Can edit trucks relatives' );
        $canEditTruckRelatives->namespace    =   'brookr.edit.trucks-relatives';
        $canEditTruckRelatives->save();

        $canDeleteTrucksRelatives               =   new Permission;
        $canDeleteTrucksRelatives->name         =   __( 'Can delete trucks relatives' );
        $canDeleteTrucksRelatives->namespace    =   'brookr.delete.trucks-relatives';
        $canDeleteTrucksRelatives->save();

        $canCreateLoads               =   new Permission;
        $canCreateLoads->name         =   __( 'Can create loads' );
        $canCreateLoads->namespace    =   'brookr.create.loads';
        $canCreateLoads->save();

        $canChangeLoadsStatus               =   new Permission;
        $canChangeLoadsStatus->name         =   __( 'Can change loads status' );
        $canChangeLoadsStatus->namespace    =   'brookr.change.loads-status';
        $canChangeLoadsStatus->save();

        $canSeeLoadsAssigned               =   new Permission;
        $canSeeLoadsAssigned->name         =   __( 'Can see loads assigned' );
        $canSeeLoadsAssigned->namespace    =   'brookr.see.loads-assigned';
        $canSeeLoadsAssigned->save();

        $canEditLoads               =   new Permission;
        $canEditLoads->name         =   __( 'Can edit loads' );
        $canEditLoads->namespace    =   'brookr.edit.loads';
        $canEditLoads->save();

        $canDeleteLoads               =   new Permission;
        $canDeleteLoads->name         =   __( 'Can delete loads' );
        $canDeleteLoads->namespace    =   'brookr.delete.loads';
        $canDeleteLoads->save();

        $canSeeLoads               =   new Permission;
        $canSeeLoads->name         =   __( 'Can see loads' );
        $canSeeLoads->namespace    =   'brookr.see.loads';
        $canSeeLoads->save();

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
            Role::addPermissions( $dispatcher->namespace, $permission->namespace );
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
            Role::AddPermissions( $driver->namespace, $permission->namespace );
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