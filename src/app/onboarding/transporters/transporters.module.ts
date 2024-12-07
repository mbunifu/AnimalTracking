import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransportersRoutingModule } from './transporters-routing.module';
import { ContainerComponent } from './container/container.component';
import { BankDetailsComponent } from './container/bank-details/bank-details.component';
import { VehicleDetailsComponent } from './container/vehicle-details/vehicle-details.component';
import { LocationDetailsComponent } from './container/location-details/location-details.component';
import { PersonalInformationComponent } from './container/personal-information/personal-information.component';
import { FormsModule } from '@angular/forms'; 


@NgModule({
  declarations: [
    ContainerComponent,
    BankDetailsComponent,
    VehicleDetailsComponent,
    LocationDetailsComponent,
    PersonalInformationComponent
  ],
  imports: [
    CommonModule,
    FormsModule ,
    TransportersRoutingModule
  ]
})
export class TransportersModule { }
