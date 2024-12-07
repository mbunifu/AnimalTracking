import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OnboardingRoutingModule } from './onboarding-routing.module';
import { ServiceproviderOnboardingComponent } from './serviceprovider-onboarding/serviceprovider-onboarding.component';

import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/shared.module';

import { FarmersModule } from './farmers/farmers.module';
import { AgrodealersModule } from './agrodealers/agrodealers.module';


@NgModule({
  declarations: [
    ServiceproviderOnboardingComponent,
    
   
  ],
  imports: [
    CommonModule,
    OnboardingRoutingModule,
    ComponentsModule,
    SharedModule,
    FarmersModule,
    AgrodealersModule,
   
  ]
})
export class OnboardingModule { }
