import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableConfig } from '@cloud-breeze/core';
import { TrucksMaintenancesService } from 'src/app/services/trucks-maintenances.service';
import { MatDialog } from '@angular/material/dialog';
import { TendooService } from '@cloud-breeze/services';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {
  config: TableConfig;
  isLoading = false;
  sort = {};
  search = {};
  page = {};
  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private tendoo: TendooService,
    private snapshot: ActivatedRoute,
    private truckMaintenance: TrucksMaintenancesService,
    private dialog: MatDialog,
  ) { }

  ngOnInit(): void {
    this.isLoading  = true;
    this.tendoo.crud.getConfig( 'brookr.trucks-maintenance', { ...this.sort, ...this.search, ...this.page }).subscribe( ( result: TableConfig ) => {
      this.isLoading  = false;
      this.config   = result;
    })
  }

  handleAction( event ) {
    if ( event.menu.type === 'DELETE' ) {
      this.truckMaintenance.deleteMaintenance( event.row.id ).subscribe( result => {
        this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
        this.dialog.getDialogById( event.menu.namespace ).close();
        this.ngOnInit();
      }, ( result ) => {
        this.snackbar.open( result[ 'error' ].message || result[ 'message' ] || 'An unexpected error has occured', 'OK', { duration: 3000 });
      })
    } else if ( event.menu.type === 'GOTO' ) {
      this.router.navigateByUrl( '/dashboard/trucks/maintenances/manage/' + event.row.id );
    }
  }

  handleSort( event ) {
    this.sort   = event;
    this.ngOnInit();
  }

  handleRefresh( event ) {
    this.ngOnInit();
  }

  handlePagineNavigation( event ) {

  }

  handleSearch( event ) {
    this.search   = {
      search : event
    }
    this.ngOnInit();
  }

  handleDelete( event ) {
    console.log( event );
  }
}
