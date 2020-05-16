<?php

use Tendoo\Core\Services\Options;

/**
 * Brookr Currency Helper
 * @param int amount
 * @return string;
 */
function br_currency( $amount ) {
    $options    =   app()->make( Options::class );
    return $options->get( 'brookr_system_currency', 'USD' ) . number_format( $amount, 2 );
}