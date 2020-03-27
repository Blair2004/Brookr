import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { TendooCoreService } from 'src/app/services/tendoo-core.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TableConfig } from '@cloud-breeze/core';

@Component({
  selector: 'app-maintenance-list',
  templateUrl: './maintenance-list.component.html',
  styleUrls: ['./maintenance-list.component.scss']
})
export class MaintenanceListComponent implements OnInit {
  config: TableConfig;
  isLoading = false;
  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private tendoo: TendooCoreService,
    private snapshot: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.isLoading  = true;
    this.tendoo.crud.getConfig( 'brookr.trucks-maintenance' ).subscribe( ( result: TableConfig ) => {
      this.isLoading  = false;
      this.config   = result;
    })
  }

  handleAction( event ) {

  }

  handleSort( event ) {

  }

  handleRefresh( event ) {

  }

  handlePagineNavigation( event ) {

  }

  handleSearch( event ) {

  }

  handleDelete( event ) {

  }


}
