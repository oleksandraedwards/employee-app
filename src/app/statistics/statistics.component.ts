import {Component, NgZone, OnInit} from '@angular/core';
// var CanvasJS = require('./canvasjs.min');
import * as CanvasJS from 'src/assets/canvasjs.min.js';
import {EmplService} from '../services/empl.service';
import {Empl} from '../model/empl';
import {Observable} from 'rxjs';
import {Chart, ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {ChartsService} from '../services/charts.service';
import {Label} from 'ng2-charts';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css'],
  providers: [EmplService]
})
export class StatisticsComponent implements OnInit {
  ngOnInit(): void {
  }
}
