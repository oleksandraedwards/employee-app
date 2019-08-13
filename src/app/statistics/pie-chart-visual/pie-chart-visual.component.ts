import {AfterViewInit, Component, OnChanges, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Label, SingleDataSet} from 'ng2-charts';
import {ChartsService} from '../../services/charts.service';
import {map, tap} from 'rxjs/operators';
import {Empl} from '../../model/empl';
import {promise} from 'selenium-webdriver';
import checkedNodeCall = promise.checkedNodeCall;


@Component({
  selector: 'app-pie-chart-visual',
  templateUrl: './pie-chart-visual.component.html',
  styleUrls: ['./pie-chart-visual.component.css']
})
export class PieChartVisualComponent implements OnInit, AfterViewInit {

  dataType: any = [];
  empl;
  button = false;
  value;
  label;
  clickedElementIndex;


    // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];

  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;

  ngAfterViewInit() {
    this.updateCharts();
  }

  constructor(private cs: ChartsService) {
  }

  // public pieChartPlugins = [pluginDataLabels];
  public updateCharts(): void {
    console.log('updateCharts()');

    setTimeout(() => {
      this.chart.ngOnChanges({} as SimpleChanges);
    }, 100);
  }

  // work in progress:
  public chartClicked(e: any): void {
    this.button = true;
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      console.log(activePoints);
      if (activePoints.length > 0) {
        // get the internal index of slice in pie chart
        this.clickedElementIndex = activePoints[0]._index;
        this.label = chart.data.labels[this.clickedElementIndex];
        // get value by index
        this.value = chart.data.datasets[0].data[this.clickedElementIndex];
        console.log(this.clickedElementIndex, this.label, this.value);
      }
    }
  }

  ngOnInit() {
    this.cs.getEmpls()
      .pipe(
        map(data =>
          this.dataType = data)
      )
      .subscribe((response) => {
        {
          console.log(this.dataType);
          this.dataType = response;
          // this.pieChartLabels.length = 0;
          // for (let i = this.dataType.position.length - 1; i >= 0; i--) {
          //   this.pieChartLabels.push(this.dataType.position[i]);
          // }
          for (let item of this.dataType) {
            this.pieChartData.push(item.salary);
            console.log(item.salary);
          }
          for (let item of this.dataType) {
            this.pieChartLabels.push(item.position);
            // this.pieChartLabels.push(item.name);

            console.log(item.position);
          }
          // this.pieChartData.push('po');
          // this.pieChartLabels.push(this.dataType[0].position);
          // this.pieChartData.push(this.dataType[1].salary);

        }
      });
  }

}
