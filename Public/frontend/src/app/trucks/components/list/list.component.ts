import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  entries = [];
  constructor() {
    this.entries  = (new Array(20))
      .fill('')
      .map( entry => {
      return {
        options: [
          {
            label: 'Delete',
            onClick: () => {
              alert( 'ok' );
            }
          }
      ],
      };
    });
   }

  ngOnInit(): void {
  }
}
