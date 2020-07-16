@component('mail::message')
# {{ __( 'Load Delivery Complete' ) }}

{{ sprintf( 
    __( 'The load with the reference %s is has been delivered by the driver %s to the location %s' ), 
    $load->load_reference,
    $load->driver->details->first_name . ' ' . $load->driver->details->last_name . '(' . $load->driver->username . ')',
    $load->delivery_city
) }}

@component('mail::button', ['url' => url( '/brookr/dashboard/loads' ) ])
{{ __( 'Loads' ) }}
@endcomponent

@component('mail::button', ['url' => $load->delivery_document_url ])
{{ __( 'Delivery Document' ) }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent