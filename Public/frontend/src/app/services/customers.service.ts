import { Injectable } from '@angular/core';
import { TendooCoreService } from './tendoo-core.service';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  baseUrl: string;

  constructor(
    private tendooService: TendooCoreService
  ) {
    this.baseUrl  = this.tendooService[ 'config' ].base;
  }

  createCustomer( fields ) {
    return this.tendooService.post( `${this.baseUrl}/api/brookr/customers`, fields );
  }

  updateCustomer( id, fields ) {
    return this.tendooService.put( `${this.baseUrl}/api/brookr/customers/${id}`, fields );
  }

  deleteCustomer( id ) {
    return this.tendooService.delete( `${this.baseUrl}/api/brookr/customers/${id}` );
  }

  getCustomers() {
    return this.tendooService.get( `${this.baseUrl}/api/brookr/customers` );
  }
}
