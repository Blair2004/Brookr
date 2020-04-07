<?php

use Modules\Brookr\Models\Notification;

class NotificationService
{
    public function notify( $details, $user )
    {
        $notification               =   new Notification;
        $notification->title        =   $details[ 'title' ];
        $notification->description  =   $details[ 'description' ];
        $notification->actions      =   ! empty( @$details[ 'actions' ] ) ? json_encode( @$details[ 'actions' ] ) : '[]';
        $notification->action       =   $details[ 'action' ] ?? '';
        $notification->read         =   false;
        $notification->save();
    }

    public function delete( $id )
    {
        $notification   =   Notification::findOrFail( $id );
        $notification->delete();    
    }
}