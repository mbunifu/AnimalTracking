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



@NgModule({
  declarations: [
    ReportsComponent
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
    MatDividerModule
]
})
export class ReportAnalyticsModule { }
