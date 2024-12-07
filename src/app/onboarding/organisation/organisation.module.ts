import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrganisationRoutingModule } from './organisation-routing.module';
import { ContainerComponent } from './container/container.component';
import { AcademicBackgroundComponent } from './container/academic-background/academic-background.component';
import { PersonalInformationComponent } from './container/personal-information/personal-information.component';
import { BusinessInformationComponent } from './container/business-information/business-information.component';
import { BankDetailsComponent } from './container/bank-details/bank-details.component';


@NgModule({
  declarations: [
    ContainerComponent,
    AcademicBackgroundComponent,
    PersonalInformationComponent,
    BusinessInformationComponent,
    BankDetailsComponent
  ],
  imports: [
    CommonModule,
    OrganisationRoutingModule
  ]
})
export class OrganisationModule { }
