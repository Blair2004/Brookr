<?php
namespace Modules\Brookr\Crud;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Tendoo\Core\Services\Crud;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Models\User;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Services\Options;
use Modules\Brookr\Models\DriversUnassignedLoad;

class BrookrDriversUnassignedLoadsCrud extends Crud
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
    protected $namespace  =   'brookr.drivers-loads.unassigned';

    /**
     * Model Used
     */
    protected $model      =   \Modules\Brookr\Models\DriversUnassignedLoad::class;

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
        $query->where( 'visible', '=', 1 )
            ->where( 'status', $this->options->get( 'brookr_system_unassigned_status', 'pending' ) )
            ->where( 'driver_id', '=', null );
    }

    /**
     * Return the label used for the crud 
     * instance
     * @return  array
    **/
    public function getLabels()
    {
        return [
            'list_title'            =>  __( 'BrookrDriverUnassignedLoadsCruds List' ),
            'list_description'      =>  __( 'Display all brookrdriverunassignedloadscruds.' ),
            'no_entry'              =>  __( 'No brookrdriverunassignedloadscruds has been registered' ),
            'create_new'            =>  __( 'Add a new brookrdriverunassignedloadscrud' ),
            'create_title'          =>  __( 'Create a new brookrdriverunassignedloadscrud' ),
            'create_description'    =>  __( 'Register a new brookrdriverunassignedloadscrud and save it.' ),
            'edit_title'            =>  __( 'Edit brookrdriverunassignedloadscrud' ),
            'edit_description'      =>  __( 'Modify  Brookrdriverunassignedloadscrud.' ),
            'back_to_list'          =>  __( 'Return to BrookrDriverUnassignedLoadsCruds' ),
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
    public function filterPutInputs( $inputs, \Modules\Brookr\Models\DriversUnassignedLoad $entry )
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
        if ( $namespace == 'brookr.drivers-loads.unassigned' ) {
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
                'label'     =>  __( 'Actions' ),
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
        $entry->{'$actions'}    =   [
            [
                'label'     =>  __( 'Handle' ),
                'namespace' =>  'handle',
                'type'      =>  'PUT',
                'index'     =>  'id',
                'url'       =>  url( 'api/brookr/drivers/loads/handle/{id}'),
                'confirm'   =>  [
                    'message'  =>  __( 'Would You like to assign yourself to this delivery ?' ),
                    'title'     =>  __( 'Handle A Load for Delivery' )
                ]
            ], [
                'label'         =>      __( 'Rate Document' ),
                'namespace'     =>      'rate_document_url',
                'type'          =>      'OPEN',
                'index'         =>      'id',
                'id'            =>      $entry->id,
                'url'           =>      '/dashboard/loads/edit/{id}'
            ],
        ];

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
                if ( $entity instanceof Modules\Brookr\Models\DriversUnassignedLoad ) {
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