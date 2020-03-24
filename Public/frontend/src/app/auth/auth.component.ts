import { Component, OnInit } from '@angular/core';
import { TendooFieldsService, Field, ValidationGenerator, TendooAuthService, TendooService } from '@cloud-breeze/core';
import { FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, ActivatedRoute } from '@angular/router';

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
    private tendooFields: TendooFieldsService,
    private tendoo: TendooService,
    private snackbar: MatSnackBar,
    private router: Router,
    private activatedRoute: ActivatedRoute 
  ) { }

  ngOnInit(): void {
    this.tendooFields.getPublicFields( 'brookr.login' ).subscribe( ( fields: Field[] ) => {
      const result  = ValidationGenerator.buildFormGroup( fields );
      this.form     = result.formGroup;
      this.fields   = result.fields;
      this.loaded   = true;
      // debug
      this.form.get( 'username' ).setValue( 'admin' );
      this.form.get( 'password' ).setValue( 'sanches' );
      this.login();
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
    this.tendoo.auth.login( this.form.value ).subscribe( result => {
      this.activatedRoute.queryParamMap.subscribe( param => {
        const path = param.get( 'redirect' ) || '/dashboard';
        this.tendoo.auth.setCredentials( result[ 'user' ], result[ 'token' ]);
        console.log( 'will redirect', path, result[ 'user' ], this.tendoo.auth.getUser() );
        this.snackbar.open( result[ 'message' ], null, { duration: 3000 });
        this.router.navigateByUrl( path );
      })
    }, ( result ) => {
      this.isLoggingIn  = false;
      ValidationGenerator.enableFields( this.fields );
      this.snackbar.open( result[ 'error' ][ 'message' ] || 'An unexpected error has occored', 'OK', { duration: 5000 });
    });
  }

}
