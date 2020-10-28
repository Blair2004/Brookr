<?php
namespace Modules\Brookr\Services;

use Carbon\Carbon;
use Tendoo\Core\Services\Options;

class HelperService
{
    public static function swapModelValuesOnTemplate( $template, $model, $forbidden = [], $dates = [] )
    {
        $options                    =   app()->make( Options::class );
        $dateFormat                 =   $options->get( 'brookr_system_datetime_format', 'D d, M y H:m' );

        foreach( $model->toArray() as $key => $value ) {
            if ( ! in_array( $key, $forbidden ) ) {
                if ( in_array( $key, $dates ) ) {
                    $template   =   str_replace( '{' . $key . '}', Carbon::parse( $value )->format( $dateFormat ), $template );
                } else {
                    $template   =   str_replace( '{' . $key . '}', $value, $template );
                }
            }
        }

        return $template;
    }
}