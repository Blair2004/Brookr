import { Component, OnInit, OnDestroy } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { Observable, Subscription } from 'rxjs';
import { AppActions } from 'src/app/store/action';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit, OnDestroy {
  state$: Observable<AppState>;
  stateSubscription: Subscription;
  constructor(
    public store: Store<{ state: AppState }>
  ) { }

  ngOnInit(): void {
    this.state$             = this.store.pipe( select( 'state' ) );
    this.stateSubscription  = this.state$.subscribe( f => console.log( f ) );
  }

  ngOnDestroy() {
    this.stateSubscription.unsubscribe();
  }

  toggleMenu( menu, index ) {
    this.store.dispatch( AppActions.toggleMenu({ menu, index }) );
  }

  toggleSidebar() {
    this.store.dispatch( AppActions.toggleSidebar() );  
  }
}
