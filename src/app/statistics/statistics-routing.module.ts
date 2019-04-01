import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {StatisticsComponent} from './statistics.component';
import {BarChartComponent} from './bar-chart/bar-chart.component';
import {PieChartVisualComponent} from './pie-chart-visual/pie-chart-visual.component';

// import {AuthGuard} from './auth.guards';


const statisticsRoutes: Routes = [
  {
    path: '',
    component: StatisticsComponent,
    // canActivate: [AuthGuard],
        // path: '',
        // canActivateChild: [AuthGuard],
        children: [
          { path: 'pie-chart-visual', component: PieChartVisualComponent },
          { path: 'bar-chart', component: BarChartComponent },
        ]
      }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(statisticsRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
