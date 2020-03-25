import { Injectable } from '@angular/core';
import { TendooCoreService } from './tendoo-core.service';

@Injectable({
  providedIn: 'root'
})
export class TrucksMaintenancesService {

  constructor(
    private tendoo: TendooCoreService
  ) { }

  saveMaintenance( fields, identifier = null ) {
    return this.tendoo[ identifier === null ? 'post' : 'put' ]( `${this.tendoo[ 'config' ].base }/api/brookr/trucks-maintenances${ identifier !== null ? `/${identifier}` : '' }`, fields );
  }
}
