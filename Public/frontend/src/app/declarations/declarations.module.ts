import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../partials/dashboard/layout/layout.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material.module';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from '../store/state';
import { CloudBreezeModule } from '@cloud-breeze/core';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ 
    LayoutComponent
  ],
  exports: [
    LayoutComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    CloudBreezeModule.forRoot({
      base : 'http://laravel-6001.go',
      angular: ''
    })
  ]
})
export class DeclarationsModule { }
