import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {EmplEditComponent} from './empl-edit/empl-edit.component';
import {EmplListComponent} from './empl-list/empl-list.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
// import {AuthGuard} from './auth.guards';
import {HomeComponent} from './home/home.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {ManagerComponent} from './manager/manager.component';
import {StatisticsComponent} from './statistics/statistics.component';
import {SharepointComponent} from './sharepoint/sharepoint.component';
import {LandingPageComponent} from './landing-page/landing-page.component';
import {BarChartComponent} from './statistics/bar-chart/bar-chart.component';
import {PieChartVisualComponent} from './statistics/pie-chart-visual/pie-chart-visual.component';

const routes: Routes = [


  { path: '',
    component: LandingPageComponent,
    // canActivate: [AuthGuard]
  },
  {
    path: 'empl-list', component: EmplListComponent,

    children: [
      {
        path: 'empl-edit/:id',
        component: EmplEditComponent
      }
    ],
  },
  {
    path: 'user',
    component: UserComponent
  },
  {
    path: 'manager',
    component: ManagerComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  {
    path: 'auth/login',
    component: LoginComponent
  },
  {
    path: 'auth/register',
    component: RegisterComponent
  },
  {
    path: 'statistics',
    component: StatisticsComponent,

    children: [
      {
        path: 'pie-chart-visual',
        component: PieChartVisualComponent,
      },
      {
        path: 'bar-chart',
        component: BarChartComponent
      },
    ]
  },
  {
    path: 'sharepoint',
    component: SharepointComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
