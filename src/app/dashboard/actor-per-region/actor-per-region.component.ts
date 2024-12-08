import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartComponent } from "ng-apexcharts";

@Component({
  selector: 'app-actor-per-region',
  templateUrl: './actor-per-region.component.html',
  styleUrls: ['./actor-per-region.component.css']
})
export class ActorPerRegionComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  
  // Define radial chart options
  radialChartOptions: any = {
    radialseries: [70, 20, 10, 50], // Example series data
    chart: {
      height: 350,
      type: "radialBar"
    },
    plotOptions: {
      radialBar: {
        dataLabels: {
          name: {
            fontSize: "22px",
          },
          value: {
            fontSize: "16px",
          },
          total: {
            show: true,
            label: "Total",
            formatter: function (w) {
              // Calculates the sum of the series
              return w.globals.seriesTotals.reduce((a, b) => a + b, 0).toString();
            }
          }
        }
      }
    },
    labels: ["Goat", "Cattle", "Carmel", "Sheep"], // Example labels
    colors: ["#FFA500", "#4B0082", "#0000FF", "#17A2B8"], // Example colors
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 300
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  };

  constructor() {}

  ngOnInit(): void {
    // Any initialization logic
  }
}
