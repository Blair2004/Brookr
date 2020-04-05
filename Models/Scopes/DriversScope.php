<?php
namespace Modules\Brookr\Models\Scopes;

use Tendoo\Core\Models\Role;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Scope;
use Illuminate\Database\Eloquent\Builder;

class DriversScope implements Scope
{
    public function apply( Builder $builder, Model $model )
    {
        $builder->where( 'role_id', Role::namespace( 'brookr.driver' )->id );
    }
}