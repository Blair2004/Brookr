import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { ManageComponent } from './components/manage/manage.component';
import { MaintenanceListComponent } from './components/maintenance-list/maintenance-list.component';
import { MaintenanceManageComponent } from './components/maintenance-manage/maintenance-manage.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'create', component: ManageComponent },
  { path: 'edit/:id', component: ManageComponent },
  { path: ':id/maintenance', component: MaintenanceListComponent },
  { path: ':id/maintenance/edit', component: MaintenanceManageComponent },
  { path: 'maintenance/new', component: MaintenanceManageComponent },
  { path: 'maintenance', component: MaintenanceListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrucksRoutingModule { }
