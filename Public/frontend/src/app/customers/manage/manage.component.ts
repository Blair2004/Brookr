import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TendooFormsService, Form } from '@cloud-breeze/core';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  mode  = 'create';
  form: Form;
  constructor(
    private activatedRoute: ActivatedRoute,
    private tendooForm: TendooFormsService
  ) { 
    this.activatedRoute.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit'
      }
    });

    this.tendooForm.getPublicForm( 'brookr.customers' ).subscribe( ( form: Form ) => {
      this.form   = form;
    });
  }

  ngOnInit(): void {
  }

  handleSubmit( form: Form ) {
    console.log( form );
  }

}
