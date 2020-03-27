import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Field, TendooService, TendooFieldsService, Form, ValidationGenerator, TendooFormsService } from '@cloud-breeze/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode  = 'create';
  id    = '';
  form: Form;
  constructor(
    private routeSnapshot: ActivatedRoute,
    private tendoo: TendooService,
    private tendooForms: TendooFormsService,
    private client: HttpClient
  ) { }

  ngOnInit(): void {
    this.routeSnapshot.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit';
        this.id     = param.get( 'id' );
      }
      this.generateForm();
    });
  }

  generateForm() {
    this.tendooForms.getPublicForm( 'brookr.drivers' ).subscribe( (form:Form) => {
      this.form   = form;
    });
  }

  selectThis( section ) {
    this.form.sections.forEach( s => s[ 'active' ] = false );
    section.active  = true;
  }

  handleSubmit( form: Form ) {
    console.log( form.formGroup.value );
  }
}
