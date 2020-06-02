<?php
namespace Modules\Brookr\Crud;
use Illuminate\Http\Request;
use Tendoo\Core\Models\User;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\Crud;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\DriversAssignedLoad;

class BrookrDriversAssignedLoadsCrud extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   'brookr_loads_delivery';

    /**
     * base route name
     */
    protected $mainRoute      =   '/dashboard/drivers/loads';

    /**
     * Define namespace
     * @param  string
     */
    protected $namespace  =   'brookr.drivers-loads.assigned';

    /**
     * Model Used
     */
    protected $model      =   \Modules\Brookr\Models\DriversAssignedLoad::class;

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'tendoo_users', 'brookr_loads_delivery.user_id', '=', 'tendoo_users.id' ],
    ];

    /**
     * Define where statement
     * @var  array
    **/
    protected $listWhere    =   [];

    /**
     * Define where in statement
     * @var  array
     */
    protected $whereIn      =   [];

    /**
     * Fields which will be filled during post/put
     */
    public $fillable    =   "";

    /**
     * Define Constructor
     * @param  
     */
    public function __construct()
    {
        parent::__construct();

        Hook::addFilter( 'crud.entry', [ $this, 'setActions' ], 10, 2 );
        $this->options      =   app()->make( Options::class );
    }

    public function hook( $query )
    {
        $query->where( 'driver_id', Auth::id() )
            ->where( 'status', '<>', $this->options->get( 'brookr_notify_load_delivered', 'delivered' ) );
    }

    /**
     * Return the label used for the crud 
     * instance
     * @return  array
    **/
    public function getLabels()
    {
        return [
            'list_title'            =>  __( 'BrookrDriversAssignedLoadsCruds List' ),
            'list_description'      =>  __( 'Display all brookrdriversassignedloadscruds.' ),
            'no_entry'              =>  __( 'No brookrdriversassignedloadscruds has been registered' ),
            'create_new'            =>  __( 'Add a new brookrdriversassignedloadscrud' ),
            'create_title'          =>  __( 'Create a new brookrdriversassignedloadscrud' ),
            'create_description'    =>  __( 'Register a new brookrdriversassignedloadscrud and save it.' ),
            'edit_title'            =>  __( 'Edit brookrdriversassignedloadscrud' ),
            'edit_description'      =>  __( 'Modify  Brookrdriversassignedloadscrud.' ),
            'back_to_list'          =>  __( 'Return to BrookrDriversAssignedLoadsCruds' ),
        ];
    }

    /**
     * Check whether a feature is enabled
     * @return  boolean
    **/
    public function isEnabled( $feature )
    {
        return false; // by default
    }

    /**
     * Fields
     * @param  object/null
     * @return  array of field
     */
    public function getFields( $entry = null ) 
    {
        return [
            // your field here
        ];
    }

    /**
     * Filter POST input fields
     * @param  array of fields
     * @return  array of fields
     */
    public function filterPostInputs( $inputs )
    {
        return $inputs;
    }

    /**
     * Filter PUT input fields
     * @param  array of fields
     * @return  array of fields
     */
    public function filterPutInputs( $inputs, \Modules\Brookr\Models\DriversAssignedLoad $entry )
    {
        return $inputs;
    }

    /**
     * After Crud POST
     * @param  object entry
     * @return  void
     */
    public function afterPost( $inputs )
    {
        return $inputs;
    }

    
    /**
     * get
     * @param  string
     * @return  mixed
     */
    public function get( $param )
    {
        switch( $param ) {
            case 'model' : return $this->model ; break;
        }
    }

    /**
     * After Crud PUT
     * @param  object entry
     * @return  void
     */
    public function afterPut( $inputs )
    {
        return $inputs;
    }
    
    /**
     * Protect an access to a specific crud UI
     * @param  array { namespace, id, type }
     * @return  array | throw AccessDeniedException
    **/
    public function canAccess( $fields )
    {
        $users      =   app()->make( Users::class );
        
        if ( $users->is([ 'admin' ]) ) {
            return [
                'status'    =>  'success',
                'message'   =>  __( 'The access is granted.' )
            ];
        }

        throw new AccessDeniedException( __( 'You don\'t have access to that ressource' ) );
    }

    /**
     * Before Delete
     * @return  void
     */
    public function beforeDelete( $namespace, $id ) {
        if ( $namespace == 'brookr.drivers-loads.assigned' ) {
            /**
             *  Perform an action before deleting an entry
             *  In case something wrong, this response can be returned
             *
             *  return response([
             *      'status'    =>  'danger',
             *      'message'   =>  __( 'You\re not allowed to do that.' )
             *  ], 403 );
            **/
        }
    }

    /**
     * Define Columns
     * @return  array of columns configuration
     */
    public function getColumns() {
        return [
            '$actions'      =>  [
                'label'     =>  __( 'Actions' )
            ],
            'name'  =>  [
                'label'     =>  __( 'Name' ),
            ],
            'load_reference'    =>  [
                'label'     =>  __( 'Load Reference' ),
            ],
            'pickup_reference'  =>  [
                'label'     =>  __( 'Pickup Reference' ),
            ],
            'pickup_city'   =>  [
                'label'     =>  __( 'Pickup City' ),
            ],
            'pickup_date'   =>  [
                'label'     =>  __( 'Pickup Date' ),
            ],
            'delivery_city' =>  [
                'label'     =>  __( 'Delivery City' )
            ],
            'delivery_date' =>  [
                'label'     =>  __( 'Delivery Date' )
            ],
            'cost'          =>  [
                'label'     =>  __( 'Price' ),
            ],
            'status'        =>  [
                'label'     =>  __( 'Status' ),
            ],
        ];
    }

    /**
     * Define actions
     */
    public function setActions( $entry, $namespace )
    {
        $entry->{'$actions'}    =   [];

        if ( $entry->status === $this->options->get( 'brookr_system_unassigned_status', 'pending' ) ) {
            $entry->{'$actions'}[]      =   [
                'label'     =>  __( 'Awaiting Load' ),
                'namespace' =>  'brookr.await-load',
                'url'       =>  url( 'api/brookr/loads/start' )
            ];
        }

        if ( $entry->status === $this->options->get( 'brookr_system_awaiting_status', 'awaiting' ) ) {
            $entry->{'$actions'}[]      =   [
                'label'     =>  __( 'Start Delivery' ),
                'namespace' =>  'brookr.start-delivery',
                'url'       =>  url( 'api/brookr/loads/start' )
            ];
        }

        if ( $entry->status === $this->options->get( 'brookr_system_handling_status ', 'ongoing' ) ) {
            $entry->{'$actions'}[]      =   [
                'label'     =>  __( 'Upload POD' ),
                'namespace' =>  'brookr.send-delivery-document',
                'url'       =>  url( 'api/brookr/loads/end' )
            ];
        }

        return $entry;
    }

    
    /**
     * Bulk Delete Action
     * @param    object Request with object
     * @return    false/array
     */
    public function bulkDelete( Request $request ) 
    {
        /**
         * Deleting licence is only allowed for admin
         * and supervisor.
         */
        $user   =   app()->make( 'Tendoo\Core\Services\Users' );
        if ( ! $user->is([ 'admin', 'supervisor' ]) ) {
            return response()->json([
                'status'    =>  'failed',
                'message'   =>  __( 'You\'re not allowed to do this operation' )
            ], 403 );
        }

        if ( $request->input( 'action' ) == 'delete_selected' ) {
            $status     =   [
                'success'   =>  0,
                'failed'    =>  0
            ];

            foreach ( $request->input( 'entries_id' ) as $id ) {
                $entity     =   $this->model::find( $id );
                if ( $entity instanceof Modules\Brookr\Models\DriversAssignedLoad ) {
                    $entity->delete();
                    $status[ 'success' ]++;
                } else {
                    $status[ 'failed' ]++;
                }
            }
            return $status;
        }
        return false;
    }

    /**
     * get Links
     * @return  array of links
     */
    public function getLinks()
    {
        return  [
            'list'  =>  '/dashboard/drivers/loads',
            'create'    =>  '/dashboard/drivers/loads/create',
            'edit'      =>  '/dashboard/drivers/loads/edit/#'
        ];
    }

    /**
     * Get Bulk actions
     * @return  array of actions
    **/
    public function getBulkActions()
    {
        return [];
    }

    /**
     * get exports
     * @return  array of export formats
    **/
    public function getExports()
    {
        return [];
    }
}