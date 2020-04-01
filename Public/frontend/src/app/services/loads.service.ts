import { Injectable } from '@angular/core';
import { TendooCoreService } from './tendoo-core.service';

@Injectable({
  providedIn: 'root'
})
export class LoadsService {
  baseUrl: string;
  constructor(
    private tendoo: TendooCoreService
  ) { 
    this.baseUrl  = this.tendoo[ 'config' ].base;
  }

  createLoads( fields ) {
    return this.tendoo.post( `${this.baseUrl}/api/brookr/loads`, fields );
  }
}
