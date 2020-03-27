import { Component, OnInit } from '@angular/core';
import { Form, TendooFormsService, ValidationGenerator } from '@cloud-breeze/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  form: Form;
  mode  = 'create';

  constructor(
    private activeSnapShot: ActivatedRoute,
    private tendooForm: TendooFormsService,
  ) { }

  ngOnInit(): void {
    this.activeSnapShot.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit';
      }
    });
    
    this.tendooForm.getPublicForm( 'brookr.loads' ).subscribe( ( form: Form ) => {
      this.form     = ValidationGenerator.buildForm( form );
      this.form.sections.forEach( section => {
        if ( section.namespace  === 'main' ) {
          section[ 'render' ]   = false;
        }
      })
      this.form   = form;
    })
  }

  handleSubmit( form: Form ) {
    
  }

}
