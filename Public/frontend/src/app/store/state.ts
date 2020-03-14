import { Menu } from '../interfaces/Menu';
import { on, createAction, createReducer, Action } from '@ngrx/store';
import { AppActions } from './action';

export interface AppState {
    dashboardMenus: Menu[],
    authenticated : boolean;
}

export const AppInitialState: AppState = {
    authenticated: false,
    dashboardMenus: [
        {
            label: 'Dashboard',
            path: '/dashboard',
            toggled: false,
            icon: 'dashboard',
        }, {
            label: 'Loads',
            toggled: false,
            icon: 'rv_hookup',
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/loads'
                }, {
                    label: 'Create',
                    path: '/dashboard/loads/create'
                }
            ]
        }, {
            label: 'Trucks',
            toggled: false,
            icon: 'local_shipping',
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/trucks'
                }, {
                    label: 'Create',
                    path: '/dashboard/trucks/create'
                }
            ]
        }, {
            label: 'Drivers',
            toggled: false,
            icon: 'people_alt',
            childrens: [
                {
                    label: 'List',
                    path: '/dashboard/drivers'
                }, {
                    label: 'Create',
                    path: '/dashboard/drivers/create'
                }
            ]
        }, {
            label: 'Settings',
            path: '/dashboard/settings',
            toggled: false,
            icon: 'settings'
        }
    ]
}

const reducer    =   createReducer(
    AppInitialState,
    on( AppActions.login, ( state: AppState ) =>  ({ ...state, authenticated: true })),
    on( AppActions.logout, ( state: AppState ) =>  ({ ...state, authenticated: false })),
    on( AppActions.toggleMenu, ( state: AppState, { menu, index }) => {
        if ( state.dashboardMenus[ index ].toggled === false ) {
            state.dashboardMenus.forEach( _menu => _menu.toggled = false );
            state.dashboardMenus[ index ].toggled   =   !state.dashboardMenus[ index ].toggled;
        } else {
            state.dashboardMenus[ index ].toggled   = false;
        }
        return state;
    })
);

export function AppReducer( state: AppState | undefined, action: Action ) {
    return reducer( state, action );
}