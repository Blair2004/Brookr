import { Component, OnInit } from '@angular/core';
import { ActivatedRouteSnapshot, ActivatedRoute } from '@angular/router';
import { Field, TendooService, TendooFieldsService, Form, ValidationGenerator, TendooFormsService } from '@cloud-breeze/core';

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
    private tendooForms: TendooFormsService
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
    this.tendooForms.getPublicForm( 'brookr.drivers' + '/' + this.id  ).subscribe( (form:Form) => {
      this.form   = ValidationGenerator.buildForm( form );
    });
  }
}
