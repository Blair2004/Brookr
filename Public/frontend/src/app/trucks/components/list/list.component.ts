import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { BrookrTableConfig } from '../../../interfaces/TableConfig';
import { TendooCrudService } from '@cloud-breeze/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  entries = [];

  config: BrookrTableConfig;
  searchEnabled   = false;

  constructor(
    private tendooCrud: TendooCrudService
  ) {
    
  }

  handleSort( event ) {
    console.log( event );
  }

  handleSearch( event ) {
    console.log( event );
  }

  ngOnInit(): void {
    this.tendooCrud.getConfig( 'brookr.trucks' ).subscribe( ( crud: BrookrTableConfig ) => {
      this.config   = crud;
      this.config.title   = 'Trucks List';
    });
  }
}
