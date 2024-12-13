import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VeterinaryNeedsComponent } from './veterinary-needs/veterinary-needs.component';
import { ComplianceAlertsComponent } from './compliance-alerts/compliance-alerts.component';

const routes: Routes = [
  {
    path: "veterinary-needs",
    component: VeterinaryNeedsComponent,
  },
  {
    path: "compliance-alerts",
    component: ComplianceAlertsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlertsRoutingModule { }
