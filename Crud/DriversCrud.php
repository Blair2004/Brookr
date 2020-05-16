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

class DriversCrud extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   'tendoo_users';

    /**
     * base route name
     */
    protected $mainRoute      =   'brookr.drivers';

    /**
     * Define namespace
     * @param  string
     */
    protected $namespace  =   'brookr.drivers';

    /**
     * Model Used
     */
    protected $model      =   \Tendoo\Core\Models\User::class;

    public $pick     =   [
        'tendoo_users'              =>  [ 'brookr_driver_status', 'username', 'email', 'created_at' ],
        // 'brookr_drivers_details'    =>  [ 'brookr_drivers_details_company_id', 'brookr_drivers_details_first_name', 'brookr_drivers_details_last_name' ],
        // 'brookr_companies'          =>  [ 'brookr_company_name', 'name' ]
    ];

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'tendoo_roles', 'tendoo_roles.id', '=', 'tendoo_users.role_id' ],
        'leftJoin' =>  [
            [ 'brookr_drivers_details', 'brookr_drivers_details.driver_id', '=', 'tendoo_users.id' ],
            [ 'brookr_companies', 'brookr_drivers_details.company_id', '=', 'brookr_companies.id', 'left' ]
        ]
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

        $role   =   Role::where( 'namespace', 'brookr.driver' )->first();

        if ( $role instanceof Role ) {
            $this->listWhere[ 'role_id' ]   =   $role->id;
        } else {
            throw new Exception( __( 'Unable to find the requested role.' ) );
        }

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
            'list_title'            =>  __( 'Drivers List' ),
            'list_description'      =>  __( 'Display all drivers.' ),
            'no_entry'              =>  __( 'No drivers has been registered' ),
            'create_new'            =>  __( 'Add a new driver' ),
            'create_title'          =>  __( 'Create a new driver' ),
            'create_description'    =>  __( 'Register a new driver and save it.' ),
            'edit_title'            =>  __( 'Edit driver' ),
            'edit_description'      =>  __( 'Modify  Driver.' ),
            'back_to_list'          =>  __( 'Return to Drivers' ),
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
        if ( $namespace == 'brookr.drivers' ) {
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
            'brookr_drivers_details_first_name'  =>  [
                'label'  =>  __( 'Name' )
            ],
            'brookr_driver_status'  =>  [
                'label'  =>  __( 'Status' )
            ],
            'brookr_companies_name' =>  [
                'label' =>  __( 'Company' )
            ],
            'email'  =>  [
                'label'  =>  __( 'Email' )
            ],
            'created_at'  =>  [
                'label'  =>  __( 'Created_at' )
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
        switch( $entry->brookr_driver_status ) {
            case 'available' : 
                $entry->brookr_driver_status = __( 'Available' );
            break;
            case 'unavailable' : 
                $entry->brookr_driver_status = __( 'Unavailable' );
            break;
            case 'disabled' : 
                $entry->brookr_driver_status = __( 'Not Working' );
            break;
            default : 
                $entry->brookr_driver_status = __( 'Unknown Status' );
            break;
        }

        $names      =   ( @$entry->brookr_drivers_details_first_name . ' ' . @$entry->brookr_drivers_details_last_name );
        // dump( $names );
        $entry->brookr_drivers_details_first_name   =   empty( trim( $names ) ) ? $entry->username : $names;
        $entry->brookr_companies_name               =   empty( $entry->brookr_companies_name ) ? __( 'N/A' ) : $entry->brookr_companies_name;

        $entry->{'$actions'}    =   [
            [
                'label'         =>      __( 'Edit' ),
                'namespace'     =>      'edit.driver',
                'type'          =>      'GOTO',
                'index'         =>      'id',
                'url'           =>      '/dashboard/drivers/edit/{id}'
            ], [
                'label'         =>      __( 'Make Payment' ),
                'namespace'     =>      'open.payment',
                'type'          =>      'POPUP',
                'index'         =>      'id',
                'url'           =>      '/dashboard/drivers/edit/{id}'
            ], [
                'label'     =>  __( 'Delete' ),
                'namespace' =>  'delete',
                'type'      =>  'DELETE',
                'index'     =>  'id',
                'url'       =>  url( 'api/brookr/drivers/' . $entry->id ),
                'confirm'   =>  [
                    'message'  =>  __( 'Would you like to delete this ?' ),
                    'title'     =>  __( 'Delete a Driver' )
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

                    event( new BeforeDeleteDriverEvent( $model ) );

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
            'list'  =>  '',
            'create'    =>  'create',
            'edit'      =>  'edit/#'
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