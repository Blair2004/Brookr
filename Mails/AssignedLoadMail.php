<?php
namespace Modules\Brookr\Mails;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Tendoo\Core\Services\Options;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;

class AssignedLoadMail extends Mailable
{
    use Queueable, SerializesModels;

    public $load;

    public function __construct( LoadDelivery $load )
    {
        $this->load     =   $load;
    }

    public function build()
    {
        $options    =   app()->make( Options::class );
        return $this
            ->subject( sprintf( __( 'Load %s is assigned to your account.' ), $this->load->load_reference ) )
            ->from( $options->get( 'brookr_mail_from_address', 'smm-notification@brookr.io' ) )
            ->markdown( 'Brookr::mails.assigned-load' );
    }
}