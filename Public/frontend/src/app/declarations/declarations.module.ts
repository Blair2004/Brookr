import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../partials/dashboard/layout/layout.component';
import { MaterialModule } from '../material.module';
import { CloudBreezeModule } from '@cloud-breeze/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [ 
    LayoutComponent
  ],
  exports: [
    LayoutComponent,
    CloudBreezeModule
  ],
  imports: [
    RouterModule,
    CommonModule,
    MaterialModule,
    HttpClientModule,
    CloudBreezeModule.forRoot({
      base : 'http://laravel-6001.go',
      angular: ''
    })
  ]
})
export class DeclarationsModule { }
