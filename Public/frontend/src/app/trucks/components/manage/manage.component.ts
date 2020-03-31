import { Component, OnInit } from '@angular/core';
import { TendooFormsService, Form, ValidationGenerator } from '@cloud-breeze/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrucksService } from 'src/app/services/trucks.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  form: Form;
  mode = 'create';
  identifier;
  constructor(
    private tendooForm: TendooFormsService,
    private activeRoute: ActivatedRoute,
    private trucksService: TrucksService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode         = 'edit';
        this.identifier   = param.get( 'id' );
      } 
      this.tendooForm.getPublicForm( 'brookr.trucks', this.identifier ).subscribe( ( form: Form ) => {
        this.form   = form;
      })
    })
  }

  handleSubmit( form: Form ) {
    form.sections.forEach( section => ValidationGenerator.touchAllFields( section.formGroup ) );

    if ( this.form.formGroup.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
    }

    form.sections.forEach( section => ValidationGenerator.deactivateFields( section.fields ) );
    this.trucksService.save( form.formGroup.value, this.identifier ).subscribe( result => {
      this.snackbar.open( result[ 'message' ], 'OK', { duration: 3000 });
      if ( ! this.identifier ) {
        this.router.navigateByUrl( '/dashboard/trucks' );
      }
    }, ( result ) => {
      form.sections.forEach( section => ValidationGenerator.enableFields( section.fields ) );
      this.snackbar.open( result[ 'error' ].message || 'An unexpected error has occured.', 'OK', { duration: 3000 });
    });
  }
}
