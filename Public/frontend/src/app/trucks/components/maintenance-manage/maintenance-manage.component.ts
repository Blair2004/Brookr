import { Component, OnInit } from '@angular/core';
import { TrucksService } from 'src/app/services/trucks.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { TendooCoreService } from 'src/app/services/tendoo-core.service';
import { ValidationGenerator, Form } from '@cloud-breeze/core';
import { TrucksMaintenancesService } from 'src/app/services/trucks-maintenances.service';

@Component({
  selector: 'app-maintenance-manage',
  templateUrl: './maintenance-manage.component.html',
  styleUrls: ['./maintenance-manage.component.scss']
})
export class MaintenanceManageComponent implements OnInit {
  mode = 'create';
  identifier = '';
  form: Form;
  constructor(
    private trucksMaintenances: TrucksMaintenancesService,
    private snapshot: ActivatedRoute,
    private snackbar: MatSnackBar,
    private tendoo: TendooCoreService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.snapshot.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit';
        this.identifier   = param.get( 'id' );
      }

      this.tendoo.forms.getPublicForm( 'brookr.trucks-maintenances', this.identifier ? +this.identifier : undefined ).subscribe( ( form: Form ) => {
        this.form   = ValidationGenerator.buildForm( form );
      })
    })
  }

  handleSubmit( event ) {
    this.form.sections.forEach( section => ValidationGenerator.touchAllFields( section.formGroup ) );
    
    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
    }
    
    this.form.sections.forEach( section => ValidationGenerator.deactivateFields( section.fields ) );
    this.trucksMaintenances.saveMaintenance( this.form.formGroup.value, this.identifier || '' ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
      if ( this.identifier ) {
        this.router.navigateByUrl( '/dashboard/trucks/maintenances' );
      }
    }, ( result ) => {
      this.snackbar.open( result[ 'error' ].message || 'An unexpected error has occured', 'OK' );
    })
  }
}
