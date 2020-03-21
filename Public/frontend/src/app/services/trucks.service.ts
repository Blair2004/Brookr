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

  create( fields ) {
    console.log( this.tendoo );
    return this.tendoo.post( this.baseUrl + '/api/brookr/trucks', fields );
  }

  delete( id ) {
    return this.tendoo.delete( this.baseUrl + '/api/broork/trucks/' + id );
  }
}
