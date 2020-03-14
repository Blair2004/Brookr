import {
  NgModule
} from '@angular/core';
import {
  Routes,
  RouterModule
} from '@angular/router';
import { LayoutComponent } from './partials/dashboard/layout/layout.component';


const routes: Routes = [{
  path: 'dashboard/loads',
  loadChildren: () => import('./loads/loads.module').then(m => m.LoadsModule)
}, {
  path: 'dashboard/trucks',
  loadChildren: () => import('./trucks/trucks.module').then(m => m.TrucksModule)
}, {
  path: 'dashboard/drivers',
  loadChildren: () => import('./drivers/drivers.module').then(m => m.DriversModule)
}, {
  path: 'dashboard/reports',
  loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
}, {
  path: 'dashboard/settings',
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule)
}, {
  path: 'dashboard/profile',
  loadChildren: () => import('./profile/profile.module').then(m => m.ProfileModule)
},
  { path: 'auth', loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
