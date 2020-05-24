<?php

namespace App\Jobs;

use App\Podcast;
use App\AudioProcessor;
use Twilio\Rest\Client;
use Illuminate\Support\Str;
use Illuminate\Bus\Queueable;
use Tendoo\Core\Services\Options;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Modules\Brookr\Events\AfterEditLoadEvent;

class SMSDriverJob implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $event;

    /**
     * Create a new job instance.
     *
     * @param  Podcast  $podcast
     * @return void
     */
    public function __construct( $event)
    {
        $this->event = $event;
    }

    /**
     * Execute the job.
     *
     * @param  AudioProcessor  $processor
     * @return void
     */
    public function handle()
    {
        $options            =   app()->make( Options::class );
        $sid                =   $options->get( 'brookr_twilio_sid' );
        $token              =   $options->get( 'brookr_twilio_token' );
        $phone              =   $options->get( 'brookr_twilio_phone' );
        $assigned_message   =   $options->get( 'brookr_assigned_load' );
        $assigned_message   =   ! empty( $assigned_message ) ? $assigned_message : __( 'Hi {driver_name}, a new load ({load_reference}) has been assigned to you for delivery. From {pickup_city} at {pickup_date} to {delivery_city} at {delivery_date}.' );

        $client     =   new Client( $sid, $token );
        $load       =   $this->event->load;
            
        if ( ! empty( $this->event->load->driver->details->phone_cell ) ) {
            $client->messages->create(
                $this->event->load->driver->details->phone_cell,
                [
                    'from'  =>  $phone,
                    'body'  =>  collect([ $assigned_message ])
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{driver_name}', $load->driver->details->first_name, $string );
                        })
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{load_id}', $load->id, $string );
                        })
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{load_reference}', $load->load_reference, $string );
                        })
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{pickup_reference}', $load->pickup_reference, $string );
                        })
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{pickup_city}', $load->pickup_city, $string );
                        })
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{delivery_city}', $load->delivery_city, $string );
                        })
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{pickup_date}', $load->pickup_date, $string );
                        })
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{delivery_date}', $load->delivery_date, $string );
                        })
                        ->map( function( $string ) use ( $load ) {
                            return Str::replaceFirst( '{rate}', br_currency( $load->cost ), $string );
                        })->first()
                ]
            );
        }
    }
}