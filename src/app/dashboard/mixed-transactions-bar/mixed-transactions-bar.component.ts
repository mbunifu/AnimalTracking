import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};


@Component({
  selector: 'app-mixed-transactions-bar',
  templateUrl: './mixed-transactions-bar.component.html',
  styleUrls: ['./mixed-transactions-bar.component.sass']
})
export class MixedTransactionsBarComponent implements OnInit {
  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  displyedColumns: string[] = ['id', 'name', 'email', 'contactNumber', 'status'];
  // dataSource: any;
  responseMessage: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];
  dataSource = [
    // { id: 1, name: 'John Doe', email: 'john.doe@gmail.com', status: 'approved' },
    // { id: 2, name: 'Jane Smith', email: 'jane.smith@gmail.com', status: 'pending' },
    // { id: 3, name: 'Mike Brown', email: 'mike.brown@gmail.com', status: 'approved' },
    // { id: 4, name: 'Mike Yellow', email: 'mike.yellow@gmail.com', status: 'pending' },

    { id: 1, name: 'Ekwang Etabo Logela', email: 'Davidkipchumbaruto@gmail.com', contactNumber: '123-456-7890', status: 'approved' },
    { id: 2, name: 'Halima Gufu Waqo', email: 'emily@chomatech.co.ke', contactNumber: '098-765-4321', status: 'pending' },
    { id: 3, name: 'Samuel Mutua Ndambuki', email: 'samuelutundambuki@gmail.co.ke', contactNumber: '555-123-4567', status: 'pending' },
    { id: 4, name: 'Esther Chebet Kiplagat', email: 'esther@safaricredi.co.ke', contactNumber: '333-222-4444', status: 'approved' },
    { id: 5, name: 'Lemaiyan Ole Nkaru', email: 'hello@kilimanjaroinnovation.co.ke', contactNumber: '777-888-9999', status: 'pending' },
    { id: 6, name: 'Ekitela Ekidor Lokidor', email: 'support@masaifinance.co.ke', contactNumber: '111-222-3333', status: 'approved' },
    { id: 7, name: 'Emma Davis', email: 'emma.davis@gmail.com', contactNumber: '444-555-6666', status: 'approved' },
    { id: 8, name: 'Leah Lengolos Lesanjo', email: 'contact@jambobiz.co.ke', contactNumber: '999-000-1111', status: 'pending' },
    { id: 9, name: 'Grace Wanyore', email: 'grace.wanyore@gmail.com', contactNumber: '222-333-4444', status: 'approved' },
    { id: 10, name: 'Henry Ekadukoit', email: 'ekadukoite@gmail.com', contactNumber: '555-666-7777', status: 'approved' }
  ];
  

  constructor() {
    this.chartOptions = {
      series: [
        {
          name: "Warehouses-Farmers",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Manufacture-Farmer",
          data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: "Processor-Farmer",
          data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47]
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
        // text: "Transactions accross farmer",
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
          "01 Jan",
          "02 Jan",
          "03 Jan",
          "04 Jan",
          "05 Jan",
          "06 Jan",
          "07 Jan",
          "08 Jan",
          "09 Jan",
          "10 Jan",
          "11 Jan",
          "12 Jan"
        ]
      },
      tooltip: {
        y: [
          {
            title: {
              formatter: function(val) {
                return val + " (Ksh)";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val + " Ksh";
              }
            }
          },
          {
            title: {
              formatter: function(val) {
                return val + " Ksh";
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


  onEdit(element: any): void {
    console.log('Edit action clicked for:', element);
  }
  
  onView(element: any): void {
    console.log('View action clicked for:', element);
  }
  
  onVerify(element: any): void {
    console.log('Verify action clicked for:', element);
  }
  
  onMoreOptions(element: any): void {
    console.log('More options clicked for:', element);
  }
  

}
