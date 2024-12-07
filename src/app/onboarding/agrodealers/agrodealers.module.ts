import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgrodealersRoutingModule } from './agrodealers-routing.module';
import { PersonalInformationComponent } from './container/personal-information/personal-information.component';
import { AcademicBackgroundComponent } from './container/academic-background/academic-background.component';
import { BusinessInformationComponent } from './container/business-information/business-information.component';
import { BankDetailsComponent } from './container/bank-details/bank-details.component';
import { ContainerComponent } from './container/container.component';


@NgModule({
  declarations: [
    PersonalInformationComponent,
    AcademicBackgroundComponent,
    BusinessInformationComponent,
    BankDetailsComponent,
    ContainerComponent
  ],
  imports: [
    CommonModule,
    AgrodealersRoutingModule
  ]
})
export class AgrodealersModule { }
