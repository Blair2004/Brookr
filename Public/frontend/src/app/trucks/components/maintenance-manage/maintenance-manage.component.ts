import { Component, OnInit } from '@angular/core';
import { TrucksService } from 'src/app/services/trucks.service';

@Component({
  selector: 'app-maintenance-manage',
  templateUrl: './maintenance-manage.component.html',
  styleUrls: ['./maintenance-manage.component.scss']
})
export class MaintenanceManageComponent implements OnInit {

  constructor(
    private trucksService: TrucksService
  ) { }

  ngOnInit(): void {
  }

}
