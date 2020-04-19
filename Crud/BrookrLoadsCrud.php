<?php
namespace Modules\Brookr\Crud;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Tendoo\Core\Models\User;
use Tendoo\Core\Facades\Hook;
use Tendoo\Core\Services\Crud;
use Tendoo\Core\Services\Field;
use Tendoo\Core\Services\Users;
use Tendoo\Core\Services\Helper;
use Tendoo\Core\Services\Options;
use Illuminate\Support\Facades\Auth;
use Modules\Brookr\Models\LoadDelivery;

class BrookrLoadsCrud extends Crud
{
    /**
     * define the base table
     */
    protected $table      =   'brookr_loads_delivery';

    /**
     * base route name
     */
    protected $mainRoute      =   '/dashboard/loads/';

    /**
     * Define namespace
     * @param  string
     */
    protected $namespace  =   'brookr.loads';

    /**
     * Model Used
     */
    protected $model      =   \Modules\Brookr\Models\LoadDelivery::class;

    /**
     * Adding relation
     */
    public $relations   =  [
        [ 'tendoo_users', 'brookr_loads_delivery.user_id', '=', 'tendoo_users.id' ],
        'leftJoin'  =>  [
            [ 'tendoo_users as driver', 'brookr_loads_delivery.driver_id', '=', 'driver.id' ],
            [ 'brookr_trucks', 'brookr_loads_delivery.truck_id', '=', 'brookr_trucks.id' ]
        ],
    ];

    public $pick    =   [
        'tendoo_users'  =>  [ 'username' ],
        'driver'        =>  [ 'username' ],
        'brookr_trucks' =>  [ 'brookr_trucks_name' ],
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

        $this->options      =   app()->make( Options::class );
        $this->statuses     =   collect( preg_split( '/[\r\n]+/', $this->options->get( 'brookr_loads_status' ), NULL, PREG_SPLIT_NO_EMPTY) )->mapWithKeys( function( $name ) {
            return [ 
                Str::slug( $name )  =>  ucfirst( $name )
            ];
        });

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
            'list_title'            =>  __( 'BrookrLoads List' ),
            'list_description'      =>  __( 'Display all brookrloads.' ),
            'no_entry'              =>  __( 'No brookrloads has been registered' ),
            'create_new'            =>  __( 'Add a new brookrload' ),
            'create_title'          =>  __( 'Create a new brookrload' ),
            'create_description'    =>  __( 'Register a new brookrload and save it.' ),
            'edit_title'            =>  __( 'Edit brookrload' ),
            'edit_description'      =>  __( 'Modify  Brookrload.' ),
            'back_to_list'          =>  __( 'Return to BrookrLoads' ),
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
    public function filterPutInputs( $inputs, \Modules\Brookr\Models\LoadDelivery $entry )
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
        if ( $namespace == 'brookr.loads' ) {
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
        $columns    =   collect([
            '$id'  =>  [
                'label'     =>  __( 'Id' ),
            ],
            'name'  =>  [
                'label'     =>  __( 'Name' ),
            ],
            'pickup_date'  =>  [
                'label'     =>  __( 'Pickup Date' ),
            ],
            'delivery_date'  =>  [
                'label'     =>  __( 'Delivery Date' ),
            ],
            'load_reference'  =>  [
                'label'     =>  __( 'Load Reference' ),
            ],
            'pickup_reference'  =>  [
                'label'     =>  __( 'Pickup Reference' ),
            ],
            'cost'  =>  [
                'label'     =>  __( 'Rate' ),
            ],
            'driver_username'  =>  [
                'label'     =>  __( 'Driver' ),
            ],
            'brookr_trucks_name'  =>  [
                'label'     =>  __( 'Truck' ),
            ],
            'status'  =>  [
                'label'     =>  __( 'Status' ),
            ],
            '$actions'  =>  [
                'label' =>  __( 'Actions' )
            ]
        ])->mapWithKeys( function( $column, $key ) {
            $column[ 'direction' ]   =   request()->query( 'active' ) === $key ? request()->query( 'direction' ) : null;
            return [ $key => $column ]; 
        })->toArray();

        return $columns;
    }

    /**
     * Define actions
     */
    public function setActions( $entry, $namespace )
    {
        $entry->status              =   $this->statuses[ $entry->status ] ?? $entry->status;
        $entry->brookr_trucks_name  =   $entry->brookr_trucks_name ?? __( 'N/A' );
        $entry->driver_username     =   $entry->driver_username ?? __( 'N/A' );
        
        $loadStatus     =   collect( preg_split( '/[\r\n]+/', $this->options->get( 'brookr_loads_status' ), NULL, PREG_SPLIT_NO_EMPTY) )->mapWithKeys( function( $name ) {
            $key        =   explode( '-', $name );
            return [ 
                Str::slug( trim( $key[0] ) )  =>  trim( $key[1] ?? 'white' )
            ];
        });
        
        $entry->{'$props'}          =   [
            'className'             =>  [ 'bg-' . $loadStatus[ $entry->status ] . '-200' ],
            'tdClassName'           =>  [ 'border-' . $loadStatus[ $entry->status ] . '-400' ]
        ];

        $entry->{'$actions'}        =   [
            [
                'label'         =>      __( 'Edit' ),
                'namespace'     =>      'edit.loads',
                'type'          =>      'GOTO',
                'index'         =>      'id',
                'url'           =>      '/dashboard/loads/edit/{id}'
            ], [
                'label'         =>      __( 'Change Status' ),
                'namespace'     =>      'open.change_status',
                'type'          =>      'OPEN',
                'index'         =>      'id',
                'id'            =>      $entry->id,
                'url'           =>      '/dashboard/loads/edit/{id}'
            ], [
                'label'         =>      __( 'Assign Driver' ),
                'namespace'     =>      'open.assign_driver',
                'type'          =>      'OPEN',
                'index'         =>      'id',
                'id'            =>      $entry->id,
                'url'           =>      '/dashboard/loads/edit/{id}'
            ], [
                'label'     =>  __( 'Delete' ),
                'namespace' =>  'delete',
                'type'      =>  'DELETE',
                'index'     =>  'id',
                'id'        =>  $entry->id,
                'url'       =>  url( '/api/brookr/loads/{id}' ),
                'confirm'   =>  [
                    'message'  =>  __( 'Would you like to delete this ?' ),
                    'title'     =>  __( 'Delete a Loads Delivery' )
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
                if ( $entity instanceof Modules\Brookr\Models\LoadDelivery ) {
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
            'list'  =>  '/dashboard/loads/',
            'create'    =>  '/dashboard/loads/create',
            'edit'      =>  '/dashboard/loads/edit/{id}'
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