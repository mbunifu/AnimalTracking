import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterinaryNeedsComponent } from './veterinary-needs/veterinary-needs.component';

const routes: Routes = [
  {
    path: "veterinary-needs",
    component: VeterinaryNeedsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertsRoutingModule { }
