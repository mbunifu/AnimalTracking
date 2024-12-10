import { Component, OnInit, ViewChild } from '@angular/core';
import {
  ChartComponent,
  ApexChart,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";

export type PieChartOptions = {
  series: number[];
  chart: ApexChart;
  labels: string[];
  title: ApexTitleSubtitle;
  legend: ApexLegend;
};

@Component({
  selector: 'app-reports-piechart',
  templateUrl: './reports-piechart.component.html',
  styleUrls: ['./reports-piechart.component.css']
})
export class ReportsPiechartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public pieChartOptions: Partial<PieChartOptions>;

  constructor() {
    // Extracting data for the most recent year (2024)
    const animalData = {
      Cows: 5130,
      Goats: 7310,
      Sheep: 6150,
      Camels: 4100
    };

    this.pieChartOptions = {
      series: Object.values(animalData), // Pie chart values
      chart: {
        type: "pie",
        height: 500
      },
      labels: Object.keys(animalData), // Pie chart labels
      title: {
        text: "Animal Distribution (2024)",
        align: "center"
      },
      legend: {
        position: "bottom"
      }
    };
  }

  ngOnInit(): void {}
}
