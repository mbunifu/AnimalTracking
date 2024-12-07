import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicBackgroundComponent } from '../agrodealers/container/academic-background/academic-background.component';
import { PersonalInformationComponent } from '../agrodealers/container/personal-information/personal-information.component';
import { BusinessInformationComponent } from '../agrodealers/container/business-information/business-information.component';
import { BankDetailsComponent } from '../agrodealers/container/bank-details/bank-details.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  {
    path: "personal-information", component:PersonalInformationComponent
  },

  {
    path: "academic-background", component:AcademicBackgroundComponent
  },
  {
    path: "business-information", component:BusinessInformationComponent
  },

  {
    path: "bank-details", component:BankDetailsComponent
  },
  {
    path: "container", component:ContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganisationRoutingModule { }
