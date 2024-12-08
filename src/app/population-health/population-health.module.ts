import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopulationHealthRoutingModule } from './population-health-routing.module';
import { PopulationComponent } from './population/population.component';
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


@NgModule({
  declarations: [
    PopulationComponent
  ],
  imports: [
    CommonModule,
    PopulationHealthRoutingModule,
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
    
]
})
export class PopulationHealthModule { }
