<?php
namespace Modules\Brookr\Mails;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Tendoo\Core\Services\Options;
use Illuminate\Queue\SerializesModels;
use Modules\Brookr\Models\LoadDelivery;
use Modules\Brookr\Services\HelperService;

class DeliveryCompletedMail extends Mailable
{
    use Queueable, SerializesModels;

    public $load;

    public function __construct( LoadDelivery $load )
    {
        $this->load     =   $load;
    }

    public function build()
    {
        $options        =   app()->make( Options::class );
        $default        =   __( "The delivery {load_reference} has been completely delivered. Find attached to the current email the related Proof of Delivery (POD) and the Rate Document (RD). \n\nThank you" );
        $template       =   $options->get( 'brookr_mail_company_template', $default );
        $deliveryInfo   =   pathinfo( $this->load->delivery_document_url );
        $rateInfo       =   pathinfo( $this->load->rate_document_url );
        $template       =   HelperService::swapModelValuesOnTemplate( $template, $this->load, [], [
            'pickup_date', 'delivery_date'
        ]);

        return $this
            ->subject( $options->get( 'brookr_mail_company_title', 'Load Completed Notification' ) )
            ->from( $options->get( 'brookr_mail_from_address', 'smm-notification@brookr.io' ) )
            ->attach( $this->load->delivery_document_url )
            ->attach( $this->load->rate_document_url )
            ->markdown( 'Brookr::mails.completed-load', compact( 'template' ) );
    }
}