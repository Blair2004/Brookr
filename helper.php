<?php

use Tendoo\Core\Services\Options;
use Carbon\Carbon;

/**
 * Brookr Currency Helper
 * @param int amount
 * @return string;
 */
function br_currency( $amount ) {
    $options    =   app()->make( Options::class );
    return $options->get( 'brookr_system_currency', 'USD' ) . number_format( $amount, 2 );
}

function br_date( $date ) {
    return Carbon::parse( $date )->format( app()->make( Options::class )->get( 'brookr_system_datetime_format', 'Y-m-d' ) );
}