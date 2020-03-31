import { Injectable } from '@angular/core';
import { TendooCoreService } from './tendoo-core.service';

@Injectable({
  providedIn: 'root'
})
export class DriversService {
  baseUrl: string;
  constructor(
    private tendoo: TendooCoreService
  ) { 
    this.baseUrl    = this.tendoo[ 'config' ].base;
  }

  setDriver( form, identifier = null ) {
    return this.tendoo[ identifier === null ? 'post' : 'put' ]( this.baseUrl + `/api/brookr/drivers${identifier !== null ? '/' + identifier : '' }`, form );
  }

  deleteDriver( id ) {
    return this.tendoo.delete( this.baseUrl + '/api/brookr/drivers/' + id );
  }

  getDrivers() {
    return this.tendoo.get( this.baseUrl + '/api/brookr/drivers' );
  }
}
