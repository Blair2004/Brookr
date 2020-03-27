import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TendooService } from '@cloud-breeze/core';
import { TendooCoreService } from './tendoo-core.service';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {
  baseUrl;

  constructor(
    private http: HttpClient,
    private tendoo: TendooCoreService
  ) { 
    this.baseUrl  = this.tendoo[ 'config' ].base;
  }

  save( fields, identifier = undefined ) {
    console.log( identifier );
    const method  = identifier !== undefined ? 'put' : 'post';
    return this.tendoo[ method ]( this.baseUrl + `/api/brookr/trucks${ identifier === undefined ? '' : '/' + identifier }`, fields );
  }

  delete( id ) {
    return this.tendoo.delete( this.baseUrl + '/api/broork/trucks/' + id );
  }

  get() {
    return this.tendoo.get( this.baseUrl + `/api/brookr/trucks` );
  }
}
