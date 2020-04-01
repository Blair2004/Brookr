<?php
namespace Modules\Brookr\Models\Scopes;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Builder;

class DriversScope implements Scope
{
    public function apply( Builder $builder, Model $model )
    {
        $builder->where( 'role_id', Role::namespace( 'brookr.driver' )->id );
        $this->extend( $builder );
    }

    public function remove( Builder $builder, Model $model )
    {
        $query      =   $builder->getQuery();
        $column     =   'role_id';

        foreach( ( array ) $query->wheres as $key => $where ) {
            if ( $key === $column ) {
                unset( $query->wheres[ $key ] );
                $query->wheres  =   array_values( $query->wheres );
            }
        }
    }
}