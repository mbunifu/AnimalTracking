import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FarmersRoutingModule } from './farmers-routing.module';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    FarmersRoutingModule
  ]
})
export class FarmersModule { }
