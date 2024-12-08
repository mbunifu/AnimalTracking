import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PopulationHealthRoutingModule } from './population-health-routing.module';
import { PopulationComponent } from './population/population.component';
import { ComponentsModule } from "../shared/components/components.module";
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';


@NgModule({
  declarations: [
    PopulationComponent
  ],
  imports: [
    CommonModule,
    PopulationHealthRoutingModule,
    ComponentsModule,
    MatCardModule,
    MatProgressBarModule
]
})
export class PopulationHealthModule { }
