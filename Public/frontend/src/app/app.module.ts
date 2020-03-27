import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeclarationsModule } from './declarations/declarations.module';
import { StoreModule } from '@ngrx/store';
import { AppReducer } from './store/state';
import { CommonModule } from '@angular/common';
import { CloudBreezeModule, TendooService } from '@cloud-breeze/core';
import { TendooCoreService } from './services/tendoo-core.service';

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
  ],
  // providers: [
  //   { provide: TendooCoreService, useExisting: TendooService }
  // ],
  bootstrap: [AppComponent]
})
export class AppModule { }
