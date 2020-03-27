import { Injectable } from '@angular/core';
import { TendooCoreService } from './tendoo-core.service';
import { TrucksService } from './trucks.service';

@Injectable({
  providedIn: 'root'
})
export class TrucksMaintenancesService {

  constructor(
    private tendoo: TendooCoreService,
  ) { }

  saveMaintenance( fields, identifier = null ) {
    const method    =   ( [ '', null ].includes( identifier ) ? 'post' : 'put' );
    return this.tendoo[ method ]( `${this.tendoo[ 'config' ].base}/api/brookr/trucks-maintenances`, fields );
  } 
}
