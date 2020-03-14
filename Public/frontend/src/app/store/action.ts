import { createAction, props } from "@ngrx/store";
import { User } from '../interfaces/User';
import { Menu } from '../interfaces/Menu';

export const AppActions     =   {
    login : createAction( 'auth.logged-in' ),
    logout : createAction( 'auth.logged-out' ),
    toggleMenu: createAction( 'dashboard.toggle-menu', props<{ menu: Menu, index: number }>() ),
}