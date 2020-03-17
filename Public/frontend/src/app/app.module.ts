import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclarationsModule } from './declarations/declarations.module';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/state';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    DeclarationsModule,
    StoreModule.forRoot({ 
      state : AppReducer
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }