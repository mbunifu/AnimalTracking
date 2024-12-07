import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WarehouseRoutingModule } from './warehouse-routing.module';
import { ContainerComponent } from './container/container.component';
import { AcademicBackgroundComponent } from './container/academic-background/academic-background.component';
import { BankDetailsComponent } from './container/bank-details/bank-details.component';
import { BusinessInformationComponent } from './container/business-information/business-information.component';
import { PersonalInformationComponent } from './container/personal-information/personal-information.component';


@NgModule({
  declarations: [
    ContainerComponent,
    AcademicBackgroundComponent,
    BankDetailsComponent,
    BusinessInformationComponent,
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
  
    WarehouseRoutingModule
  ]
})
export class WarehouseModule { }
