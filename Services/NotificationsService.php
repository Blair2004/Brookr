<?php
namespace Modules\Brookr\Services;

use Modules\Brookr\Models\Notification;

class NotificationsService
{
    public function notify( $details, $user )
    {
        $notification               =   new Notification;
        $notification->title        =   $details[ 'title' ];
        $notification->description  =   $details[ 'description' ];
        $notification->actions      =   ! empty( @$details[ 'actions' ] ) ? json_encode( @$details[ 'actions' ] ) : '[]';
        $notification->action       =   $details[ 'action' ] ?? '';
        $notification->read         =   false;
        $notification->user_id      =   $user;
        $notification->save();
    }

    public function delete( $id )
    {
        $notification   =   Notification::findOrFail( $id );
        $notification->delete();    
    }
}