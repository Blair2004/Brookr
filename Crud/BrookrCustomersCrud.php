<?php
namespace Modules\Brookr\Crud;
use Illuminate\Http\Request;
use Tendoo\Core\Models\Role;
use Tendoo\Core\Models\User;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\Crud;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Services\Helper;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\CustomerDetail;

class BrookrCustomersCrud extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   'tendoo_users';

    /**
     * base route name
     */
    protected $mainRoute      =   'brookr.customers';

    /**
     * Define namespace
     * @param  string
     */
    protected $namespace  =   'brookr.customers';

    /**
     * Model Used
     */
    protected $model      =   \Tendoo\Core\Models\User::class;

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'brookr_customers_details', 'brookr_customers_details.customers_id', '=', 'tendoo_users.id' ]
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

        $role                           =   Role::namespace( 'brookr.customer' );
        $this->listWhere[ 'role_id' ]   =   $role->id;

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
            'list_title'            =>  __( 'BrookrCustomers List' ),
            'list_description'      =>  __( 'Display all brookrcustomers.' ),
            'no_entry'              =>  __( 'No brookrcustomers has been registered' ),
            'create_new'            =>  __( 'Add a new brookrcustomer' ),
            'create_title'          =>  __( 'Create a new brookrcustomer' ),
            'create_description'    =>  __( 'Register a new brookrcustomer and save it.' ),
            'edit_title'            =>  __( 'Edit brookrcustomer' ),
            'edit_description'      =>  __( 'Modify  Brookrcustomer.' ),
            'back_to_list'          =>  __( 'Return to BrookrCustomers' ),
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
    public function filterPutInputs( $inputs, \Tendoo\Core\Models\User $entry )
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
        if ( $namespace == 'brookr.customers' ) {
            /**
             *  Perform an action before deleting an entry
             *  In case something wrong, this response can be returned
             *
             *  return response([
             *      'status'    =>  'danger',
             *      'message'   =>  __( 'You\re not allowed to do that.' )
             *  ], 403 );
            **/
            CustomerDetail::where( 'customers_id', $id )->delete();
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
            'brookr_customers_details_first_name'  =>  [
                'label'  =>  __( 'First Name' )
            ],
            'brookr_customers_details_last_name'  =>  [
                'label'  =>  __( 'Last Name' )
            ],
            'username'  =>  [
                'label'  =>  __( 'Username' )
            ],
            'created_at'  =>  [
                'label'  =>  __( 'Created_at' )
            ],
            '$actions'   =>  [
                'label'     =>  __( 'Actions' )
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
                'label'         =>      __( 'Edit' ),
                'namespace'     =>      'edit.licence',
                'type'          =>      'GOTO',
                'index'         =>      'id',
                'url'           =>      '/dashboard/customers/edit/{id}'
            ], [
                'label'     =>  __( 'Delete' ),
                'namespace' =>  'delete',
                'type'      =>  'DELETE',
                'index'     =>  'id',
                'url'       =>  url( '/api/brookr/customers/{id}' ),
                'confirm'   =>  [
                    'message'  =>  __( 'Would you like to delete this ?' ),
                    'title'     =>  __( 'Delete a customer' )
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
                if ( $entity instanceof Tendoo\Core\Models\User ) {
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
            'list'      =>  '/dashboard/customers',
            'create'    =>  '/dashboard/customers/create',
            'edit'      =>  '/dashboard/customers/edit/{id}'
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