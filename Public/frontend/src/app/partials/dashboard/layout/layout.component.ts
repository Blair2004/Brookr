import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interfaces/Menu';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/state';
import { Observable } from 'rxjs';
import { AppActions } from 'src/app/store/action';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  state$: Observable<AppState>;
  constructor(
    public store: Store<{ state: AppState }>
  ) { }

  ngOnInit(): void {
    this.state$   = this.store.pipe( select( 'state' ) );
    this.state$.subscribe( f => console.log( f ) );
  }

  toggleMenu( menu, index ) {
    this.store.dispatch( AppActions.toggleMenu({ menu, index }) );
  }

  toggleSidebar() {
    this.store.dispatch( AppActions.toggleSidebar() );  
  }
}
