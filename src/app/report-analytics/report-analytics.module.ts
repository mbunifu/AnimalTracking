import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportAnalyticsRoutingModule } from './report-analytics-routing.module';
import { ReportsComponent } from './reports/reports.component';
import { ComponentsModule } from "../shared/components/components.module";
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { ReportsPiechartComponent } from './reports-piechart/reports-piechart.component';
import { ReportsLinegrapghComponent } from './reports-linegrapgh/reports-linegrapgh.component';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';





@NgModule({
  declarations: [
    ReportsComponent,
    ReportsPiechartComponent,
    ReportsLinegrapghComponent
  ],
  imports: [
    CommonModule,
    ReportAnalyticsRoutingModule,
    ComponentsModule,
    MatCardModule,
    MatProgressBarModule,
    NgApexchartsModule,
    FormsModule,
    MatIconModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatTooltipModule,
    MatTabsModule,
    MatTableModule
]
})
export class ReportAnalyticsModule { }
