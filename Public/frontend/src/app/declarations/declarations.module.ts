import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from '../partials/dashboard/layout/layout.component';
import { MaterialModule } from '../material.module';
import { CloudBreezeModule } from '@cloud-breeze/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TabsComponent } from '../partials/dashboard/tabs/tabs.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ 
    LayoutComponent, 
    TabsComponent
  ],
  exports: [
    LayoutComponent,
    TabsComponent,
    CloudBreezeModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  imports: [
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    CloudBreezeModule.forRoot({
      base : 'http://laravel-7001.go',
      angular: ''
    })
  ]
})
export class DeclarationsModule { }
