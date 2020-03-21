<?php
namespace Modules\Brookr\Events;

class FieldsEvent
{
    public function login( $fields, $namespace )
    {
        if ( in_array( $namespace, [ 'brookr.login' ] ) ) {
            return include( dirname( __FILE__ ) . '/../Fields/' . $namespace . '.php' );
        }
        return $fields;
    }
}