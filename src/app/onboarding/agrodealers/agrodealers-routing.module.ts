import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonalInformationComponent } from './container/personal-information/personal-information.component';
import { AcademicBackgroundComponent } from './container/academic-background/academic-background.component';
import { BusinessInformationComponent } from './container/business-information/business-information.component';
import { BankDetailsComponent } from './container/bank-details/bank-details.component';
import { ContainerComponent } from '../farmers/container/container.component';

const routes: Routes = [

  {
    path: "container", component:ContainerComponent
  },
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
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgrodealersRoutingModule { }
