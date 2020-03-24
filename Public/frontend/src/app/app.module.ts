import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclarationsModule } from './declarations/declarations.module';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/state';
import { CommonModule } from '@angular/common';
import { CloudBreezeModule } from '@cloud-breeze/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    DeclarationsModule,
    StoreModule.forRoot({ 
      state : AppReducer
    }),
    CloudBreezeModule.forRoot({
      base : 'http://laravel-7001.go',
      angular: ''
    })
  ],
  exports: [
    CloudBreezeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
