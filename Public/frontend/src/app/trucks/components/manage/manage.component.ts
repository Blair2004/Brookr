import { Component, OnInit } from '@angular/core';
import { TendooFormsService, Form, ValidationGenerator } from '@cloud-breeze/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss']
})
export class ManageComponent implements OnInit {
  form: Form;
  mode = 'create';
  constructor(
    private tendooForm: TendooFormsService,
    private activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe( param => {
      if ( param.get( 'id' ) ) {
        this.mode   = 'edit';
      } 
    })
    this.tendooForm.getPublicForm( 'brookr.trucks' ).subscribe( ( form: Form ) => {
      this.form   = form;
    })
  }

  handleSubmit( form ) {
    console.log( 'want to submit' );
  }
}
