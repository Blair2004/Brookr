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
use Modules\Brookr\Models\TruckMaintenance;

class BrookrTrucksMaintenancesCrud extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   'brookr_trucks_maintenances';

    /**
     * base route name
     */
    protected $mainRoute      =   'trucks_maintenances';

    /**
     * Define namespace
     * @param  string
     */
    protected $namespace  =   'brookr.trucks-maintenances';

    /**
     * Model Used
     */
    protected $model      =   \Modules\Brookr\Models\TruckMaintenance::class;

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'tendoo_users', 'brookr_trucks_maintenances.user_id', '=', 'tendoo_users.id' ],
        [ 'brookr_trucks', 'brookr_trucks.id', '=', 'brookr_trucks_maintenances.truck_id' ],
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
    }

    /**
     * Return the label used for the crud 
     * instance
     * @return  array
    **/
    public function getLabels()
    {
        return [
            'list_title'            =>  __( 'Maintenances List' ),
            'list_description'      =>  __( 'Display all maintenances.' ),
            'no_entry'              =>  __( 'No maintenances has been registered' ),
            'create_new'            =>  __( 'Add a new maintenance' ),
            'create_title'          =>  __( 'Create a new maintenance' ),
            'create_description'    =>  __( 'Register a new maintenance and save it.' ),
            'edit_title'            =>  __( 'Edit maintenance' ),
            'edit_description'      =>  __( 'Modify  Maintenance.' ),
            'back_to_list'          =>  __( 'Return to Maintenances' ),
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
    public function filterPutInputs( $inputs, \Modules\Brookr\Models\TruckMaintenance $entry )
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
        if ( $namespace == 'brookr.trucks-maintenances' ) {
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
            'id'  =>  [
                'label'  =>  __( 'Id' )
            ],
            'name'  =>  [
                'label'  =>  __( 'Name' )
            ],
            'cost'  =>  [
                'label'  =>  __( 'Name' )
            ],
            'brookr_trucks_name'  =>  [
                'label'  =>  __( 'Truck' )
            ],
            'tendoo_users_username'  =>  [
                'label'  =>  __( 'By' )
            ],
            'created_at'  =>  [
                'label'  =>  __( 'Created On' )
            ], 
            '$actions'  =>  [
                'label'  =>  __( 'Actions' )
            ]
        ];
    }

    /**
     * Define actions
     */
    public function setActions( $entry, $namespace )
    {
        $entry->{'$actions'}    =   [
            [
                'label'         =>      __( 'Edit' ),
                'namespace'     =>      'edit.truck-maintenance',
                'type'          =>      'GOTO',
                'index'         =>      'id',
                'url'           =>      '/dashboard/crud/brookr.trucks-maintenances/edit/#'
            ], [
                'label'     =>  __( 'Delete' ),
                'namespace' =>  'delete',
                'type'      =>  'DELETE',
                'index'     =>  'id',
                'url'       =>  url( 'api/tendoo/crud/brookr.trucks-maintenances' ) . '/#',
                'confirm'   =>  [
                    'message'  =>  __( 'Would you like to delete this ?' ),
                    'title'     =>  __( 'Delete Maintenance Record' )
                ]
            ]
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
                if ( $entity instanceof Modules\Brookr\Models\TruckMaintenance ) {
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
            'list'  =>  'trucks_maintenances',
            'create'    =>  '/dashboard/trucks/maintenances/manage',
            'edit'      =>  'trucks_maintenances/edit/#'
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