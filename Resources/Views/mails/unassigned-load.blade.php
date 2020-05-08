@component('mail::message')
# {{ __( 'New Unassigned Load' ) }}

{{ sprintf( __( 'A new unassigned load with the reference %s, is available. Log in to the dashboard to start the delivery' ), $load->load_reference ) }}

@component('mail::button', ['url' => url( '/dashboard/drivers/loads?tab=unassigned' ) ])
{{ __( 'Dashboard' ) }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent