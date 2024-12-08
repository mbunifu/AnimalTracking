import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ApexChart,
  ApexAxisChartSeries,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexGrid,
  ApexXAxis
} from 'ng-apexcharts';
import { Subject } from 'rxjs';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  yaxis: ApexYAxis;
  xaxis: ApexXAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
};

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.sass']
})
export class ActorsComponent implements OnInit {
  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor() {
    // Initialize chart options with temporary data for testing
    this.chartOptions = {
      series: [
        {
          name: 'Population',
          data: [1200, 800, 500, 300] // Example data: Cattle, Goat, Donkey, Sheep
        }
      ],
      chart: {
        height: 506,
        type: 'bar',
        events: {
          click: function (chart, w, e) {
            console.log(e);
          }
        }
      },
      colors: ["#FFA500", "#4B0082", "#0000FF", "#17A2B8"], // Custom colors for each species
      plotOptions: {
        bar: {
          columnWidth: '50%',
          distributed: true
        }
      },
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      grid: {
        show: false
      },
      xaxis: {
        categories: ['Goat', 'sheep', 'cattle', 'carmel'], // Example labels
        labels: {
          style: {
            colors: ["#FFA500", "#4B0082", "#0000FF", "#17A2B8"], // Same colors as bars
            fontSize: '14px'
          }
        }
      },
      yaxis: {
        title: {
          text: 'Population'
        }
      }
    };
  }

  ngOnInit(): void {
    // Additional logic if needed during component initialization
    this.loadTemporaryData(); // Simulate a chart rendering process
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /**
   * Simulates data for the chart with descending order.
   */
  private loadTemporaryData(): void {
    const speciesData = [
      { name: 'Goat', population: 1200 },
      { name: 'Sheep', population: 800 },
      { name: 'Cattle', population: 500 },
      { name: 'Carmel', population: 300 }
    ];

    // Sort the data by population in descending order
    const sortedData = speciesData.sort((a, b) => b.population - a.population);

    // Update the chart options with the sorted data
    this.chartOptions.series = [
      {
        name: 'Population',
        data: sortedData.map((item) => item.population)
      }
    ];

    this.chartOptions.xaxis.categories = sortedData.map((item) => item.name);

    this.chartOptions.colors = ["#FFA500", "#4B0082", "#0000FF", "#17A2B8"];
  }
}
