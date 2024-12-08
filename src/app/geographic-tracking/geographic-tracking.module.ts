import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeographicTrackingRoutingModule } from './geographic-tracking-routing.module';
import { GeotrackingComponent } from './geotracking/geotracking.component';

//Impoted materials
import { MatIconModule } from '@angular/material/icon';
import { ComponentsModule } from "../shared/components/components.module";
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    GeotrackingComponent
  ],
  imports: [
    CommonModule,
    GeographicTrackingRoutingModule,
    MatIconModule,
    ComponentsModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule
]
})
export class GeographicTrackingModule { }
