import { Component, OnInit } from '@angular/core';
import { TendooFieldsService, Field, ValidationGenerator, TendooAuthService } from '@cloud-breeze/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  fields: Field[];
  form: FormGroup;
  loaded        = false;
  isLoggingIn   = false;
  constructor(
    private tendoo: TendooFieldsService,
    private tendooAuth: TendooAuthService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.tendoo.getPublicFields( 'brookr.login' ).subscribe( ( fields: Field[] ) => {
      const result  = ValidationGenerator.buildFormGroup( fields );
      this.form     = result.formGroup;
      this.fields   = result.fields;
      this.loaded   = true;
    }, ( result ) => {
      this.snackbar.open( result[ 'error' ][ 'message' ] || result.message || 'An unexpected error has occured', 'TRY AGAIN' )
        .afterDismissed()
        .subscribe( action => {
          if ( action.dismissedByAction ) {
            this.ngOnInit();
          }
      })
    });
  }

  login() {
    ValidationGenerator.touchAllFields( this.form );

    if ( this.form.invalid ) {
      return this.snackbar.open( 'Unable to proceed the form is not valid.', 'OK', { duration: 3000 });
    }

    this.isLoggingIn  = true;
    ValidationGenerator.deactivateFields( this.fields );
    this.tendooAuth.login( this.form.value ).subscribe( result => {
      this.tendoo.setCredentials( result[ 'user' ], result[ 'token' ]);
      this.router.navigateByUrl( '/dashboard' );
      this.snackbar.open( result[ 'message' ], null, { duration: 3000 });
    }, ( result ) => {
      this.isLoggingIn  = false;
      ValidationGenerator.enableFields( this.fields );
      this.snackbar.open( result[ 'error' ][ 'message' ] || 'An unexpected error has occored', 'OK', { duration: 5000 });
    });
  }

}
