import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexMarkers,
  ApexYAxis,
  ApexGrid,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  tooltip: any; // ApexTooltip;
  yaxis: ApexYAxis;
  grid: ApexGrid;
  colors: string[];
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-distribution',
  templateUrl: './distribution.component.html',
  styleUrls: ['./distribution.component.css']
})
export class DistributionComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions1: Partial<ChartOptions>;
  constructor() { 
    this.chartOptions1 = {
      series: [
        {
          name: "Cows",
          data: [5200, 5120, 3870, 6410, 5130]
        },
        {
          name: "Goats",
          data: [6712, 6150, 6210, 4120, 7310]
        },
        {
          name: "Sheep",
          data: [4170, 3170, 5140, 5290, 6150]
        },
        {
          name: "Camels",
          data: [1020, 1200, 2700, 3100, 4100]
        }
      ],
      chart: {
        height: 500,
        type: "line"
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        width: 5,
        curve: "straight",
        dashArray: [0, 8, 5]
      },
      title: {
        text: "Animal Distribution",
        align: "left"
      },
      legend: {
        tooltipHoverFormatter: function(val, opts) {
          return (
            val +
            " - <strong>" +
            opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex] +
            "</strong>"
          );
        }
      },
      markers: {
        size: 0,
        hover: {
          sizeOffset: 6
        }
      },
      xaxis: {
        labels: {
          trim: false
        },
        categories: [
          "2020",
          "2021",
          "2022",
          "2023",
          "2024",
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val) {
                return val;
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val;
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val;
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val;
              }
            }
          }
        ]
      },
      grid: {
        borderColor: "#f1f1f1"
      }
    };
  }

  ngOnInit(): void {
  }

}
