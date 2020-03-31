import { Injectable } from '@angular/core';
import { TendooCoreService } from './tendoo-core.service';
import { TrucksService } from './trucks.service';

@Injectable({
  providedIn: 'root'
})
export class TrucksMaintenancesService {
  baseUrl: string;
  constructor(
    private tendoo: TendooCoreService,
  ) { 
    this.baseUrl  = this.tendoo[ 'config' ].base;
  }

  saveMaintenance( fields, identifier = null ) {
    const method    =   ( [ '', null ].includes( identifier ) ? 'post' : 'put' );
    return this.tendoo[ method ]( `${this.tendoo[ 'config' ].base}/api/brookr/trucks-maintenances${ identifier ? '/' + identifier : '' }`, fields );
  } 

  deleteMaintenance( id ) {
    return this.tendoo.delete( `${this.baseUrl}/api/brookr/trucks-maintenances/${id}` );
  }
}
