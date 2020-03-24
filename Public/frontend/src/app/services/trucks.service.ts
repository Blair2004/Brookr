import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TendooService } from '@cloud-breeze/core';

@Injectable({
  providedIn: 'root'
})
export class TrucksService {
  baseUrl;

  constructor(
    private http: HttpClient,
    private tendoo: TendooService
  ) { 
    this.baseUrl  = this.tendoo[ 'config' ].base;
  }

  save( fields, identifier = undefined ) {
    console.log( identifier );
    return this.tendoo[ identifier != undefined ? 'put' : 'post' ]( this.baseUrl + `/api/brookr/trucks${ identifier === undefined ? '' : '/' + identifier }`, fields );
  }

  delete( id ) {
    return this.tendoo.delete( this.baseUrl + '/api/broork/trucks/' + id );
  }
}
