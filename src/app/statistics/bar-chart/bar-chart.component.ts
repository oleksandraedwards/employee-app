import {AfterViewInit, Component, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {ChartDataSets, ChartOptions, ChartType} from 'chart.js';
import {BaseChartDirective, Label} from 'ng2-charts';
import {ChartsService} from '../../services/charts.service';
import {map} from 'rxjs/operators';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})

export class BarChartComponent implements OnInit, AfterViewInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  // public barChartPlugins = [pluginDataLabels];

  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  dataStream: any = [];
  item: number;
  public idArray: number[] = [];


  constructor(private cs: ChartsService) { }

  public barChartLabels: string[] = [];
  public barChartData: number[] = [];


  ngOnInit() {
    {
      this.cs.getEmpls()
        .pipe(
          map(data =>
            this.dataStream = data)
        )
        .subscribe((response) => {
          {
            console.log(this.dataStream);
            this.dataStream = response;
            // this.pieChartLabels.length = 0;
            // for (let i = this.dataType.position.length - 1; i >= 0; i--) {
            //   this.pieChartLabels.push(this.dataType.position[i]);
            // }
            for (let item of this.dataStream) {
              this.barChartData.push(item.salary);
              console.log(item.salary);
            }
            for (let item of this.dataStream) {
              this.barChartLabels.push(item.position);
              this.idArray.push(item.id);
              console.log(item.id);
              console.log(item.position);
            }
            // this.pieChartData.push('po');
            // this.pieChartLabels.push(this.dataType[0].position);
            // this.pieChartData.push(this.dataType[1].salary);

          }
        });
    }
  }
  public updateCharts(): void {
    console.log('updateCharts()');

    setTimeout(() => {
      this.chart.ngOnChanges({} as SimpleChanges);
    }, 100);
  }

  public chartClicked(e: any): void {
    if (e.active.length > 0) {
      const chart = e.active[0]._chart;
      const activePoints = chart.getElementAtEvent(e.event);
      if ( activePoints.length > 0) {
        // get the internal index of slice in pie chart
        const clickedElementIndex = activePoints[0]._index;
        const label = chart.data.labels[clickedElementIndex];
        // get value by index
        const value = chart.data.datasets[0].data[clickedElementIndex];
        console.log(this.idArray, label, value);
      }
    }
  }

  ngAfterViewInit() {
    this.updateCharts();
  }

  // events

}
