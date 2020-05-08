@component('mail::message')
# {{ __( 'New Assigned Load' ) }}

{{ sprintf( __( 'A new load with the reference %s, has been assigned to your account. Log in to the dashboard to start the delivery' ), $load->load_reference ) }}

@component('mail::button', ['url' => url( '/dashboard/drivers/loads?tab=assigned' ) ])
{{ __( 'Dashboard' ) }}
@endcomponent

Thanks,<br>
{{ config('app.name') }}
@endcomponent