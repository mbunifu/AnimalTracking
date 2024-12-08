import { Component, OnInit, ViewChild } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

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
  selector: 'app-population',
  templateUrl: './population.component.html',
  styleUrls: ['./population.component.css']
})

export class PopulationComponent implements OnInit {
  color: ThemePalette = 'primary';
  mode: NgbProgressbarModule = 'determinate';
  value = 85;
  bufferValue = 95;

  @ViewChild('chart') chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  destroy$: Subject<boolean> = new Subject<boolean>();

  // Data for each breed
  breedsData = {
    'Dairy Breed': [
      { name: 'Freshian', population: 60500 },
      { name: 'Guensy', population: 51200 },
      { name: 'Ayshire', population: 45200 },
      { name: 'Brown Swish', population: 70200 }
    ],
    'Meat Breed': [
      { name: 'Angus', population: 41500 },
      { name: 'Hereford', population: 61250 },
      { name: 'Charolaise', population: 52500 },
      { name: 'Simmental', population: 30015 }
    ],
    'Dual Purpose': [
      { name: 'Shorthorn', population: 42200 },
      { name: 'Dexter', population: 30012 },
      { name: 'Red Poll', population: 71200 },
      { name: 'Milking Short Horn', population: 51200 }
    ],
    'Indigenous': [
      { name: 'Boran', population: 51200 },
      { name: 'Zebu', population: 71200 },
      { name: 'Ankole', population: 71200 },
      { name: 'Nguni', population: 41200 }
    ]
  };

  selectedAnimalBreed: string | null = null;  // Stores the selected animal breed
  selectedBreed: string = 'Dairy Breed'; // Default breed selection

  // Reference to Object.keys for use in the template
  objectKeys = Object.keys;

  constructor() {
    this.chartOptions = {
      series: [],
      chart: {
        height: 506,
        type: 'bar'
      },
      colors: ["#FFA500", "#4B0082", "#0000FF", "#17A2B8"],
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
        categories: [],
        labels: {
          style: {
            colors: ["#FFA500", "#4B0082", "#0000FF", "#17A2B8"],
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
    // No need to update chart on init; only update when breed is selected
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  /**
   * Handles animal breed selection change.
   * @param event The selection change event.
   */
  onAnimalBreedChange(event: any): void {
    this.selectedAnimalBreed = event.value;  // Update the selected animal breed
    // Reset selected breed when animal breed changes
    this.selectedBreed = '';
  }

  /**
   * Updates the chart based on the selected breed.
   * @param event The selection change event.
   */
  onBreedChange(event: any): void {
    this.selectedBreed = event.value;
    this.updateChart(this.selectedBreed);
  }

  /**
   * Updates the chart based on the selected breed.
   * @param breed The selected breed name.
   */
  updateChart(breed: string): void {
    const data = this.breedsData[breed];
    // Update the chart options with new data
    this.chartOptions = {
      ...this.chartOptions,
      series: [
        {
          name: 'Population',
          data: data.map((item) => item.population)
        }
      ],
      xaxis: {
        ...this.chartOptions.xaxis,
        categories: data.map((item) => item.name) // Update categories
      }
    };
  }
}
