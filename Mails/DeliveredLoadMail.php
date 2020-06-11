<?php
namespace Modules\Brookr\Mails;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Tendoo\Core\Services\Options;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Storage;
use Modules\Brookr\Models\LoadDelivery;

class DeliveredLoadMail extends Mailable
{
    use Queueable, SerializesModels;

    public $load;

    public function __construct( LoadDelivery $load )
    {
        $this->load     =   $load;
    }

    public function build()
    {
        $deliveryInfo   =   pathinfo( $this->load->delivery_document_url );
        $rateInfo       =   pathinfo( $this->load->rate_document_url );
        $options        =   app()->make( Options::class );
        
        return $this
            ->subject( sprintf( __( 'Load %s delivery is complete.' ), $this->load->load_reference ) )
            ->from( $options->get( 'brookr_mail_from_address', 'smm-notification@brookr.io' ) )
            ->attach( public_path( 'storage/brookr-uploads/loads/' . $this->load->id . '-delivery_document_url.' . $deliveryInfo[ 'extension' ] ) )
            ->markdown( 'Brookr::mails.delivered-load' );
    }
}