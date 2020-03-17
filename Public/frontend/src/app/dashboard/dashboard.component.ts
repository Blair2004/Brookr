import { Component, OnInit } from '@angular/core';
import { TableConfig, TendooCrudService } from "@cloud-breeze/core";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  tableCrud:TableConfig   = {
    columns: {
      load : {
        label: 'Load',
      },
      status: {
        label: 'Status'
      },
      driver: {
        label: 'Driver'
      }
    },
    labels: {
      list_title: 'Ongoing Loads',
      list_description: 'display all ongoing loads',
      create_title: 'Create Load',
      create_description: 'Will create new load',
      edit_title: 'Edit an existing load',
      edit_description: 'Load will be edited'
    },
    namespace: 'brookr.loads',
    fields: [],
    links: {},
  }

  constructor(
    private crudService: TendooCrudService
  ) { }

  ngOnInit(): void {
    this.crudService.get( '/brookr/loads' ).subscribe( result => {
      console.log( result );
    })
  }
}
