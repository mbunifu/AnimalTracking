import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertsRoutingModule } from './alerts-routing.module';
import { VeterinaryNeedsComponent } from './veterinary-needs/veterinary-needs.component';
import { ComponentsModule } from "../shared/components/components.module";
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { VetResourcesComponent } from './vet-resources/vet-resources.component';
// import { VetResourcesComponent } from './vet-resources/vet-resources.component';
// import { ComplianceAlertsComponent } from './compliance-alerts/compliance-alerts.component';



@NgModule({
  declarations: [
    VeterinaryNeedsComponent,
    VetResourcesComponent,
    // VetResourcesComponent,
    // ComplianceAlertsComponent
  ],
  imports: [
    CommonModule,
    AlertsRoutingModule,
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
    MatTableModule,       
    MatPaginatorModule
    
  ]
})
export class AlertsModule { }
