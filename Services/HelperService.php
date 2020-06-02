<?php
namespace Modules\Brookr\Services;

class HelperService
{
    public function swapModelValuesOnTemplate( $template, $model, $forbidden = [] )
    {
        foreach( $model->toArray() as $key => $value ) {
            if ( ! in_array( $key, $forbidden ) ) {
                $template   =   str_replace( '{' . $key . '}', $value, $template );
            }
        }

        return $template;
    }
}