@component('mail::message')
# {{ __( 'Load Delivery Started' ) }}

{{ sprintf( 
    __( 'The load with the reference %s is being handled by the driver %s to the location %s' ), 
    $load->load_reference,
    $load->driver->details->first_name . ' ' . $load->driver->details->last_name . '(' . $load->driver->username . ')',
    $load->delivery_city
) }}

@component('mail::button', ['url' => url( '/dashboard/loads' ) ])
{{ __( 'Loads' ) }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent