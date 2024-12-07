import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container/container.component';
import { BankDetailsComponent } from '../transporters/container/bank-details/bank-details.component';
import { LocationDetailsComponent } from './container/location-details/location-details.component';
import { VehicleDetailsComponent } from './container/vehicle-details/vehicle-details.component';
import { PersonalInformationComponent } from './container/personal-information/personal-information.component';

const routes: Routes = [
  {path:"container",component:ContainerComponent},
  {path:"bank-details",component:BankDetailsComponent},
  {path:"location-details",component:LocationDetailsComponent},
  {path:"vehicle-details",component:VehicleDetailsComponent},
  {path:"personal-information",component:PersonalInformationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportersRoutingModule { }
