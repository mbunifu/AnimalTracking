import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeotrackingComponent } from './geotracking/geotracking.component';

const routes: Routes = [
  { path: "geotracking", component: GeotrackingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeographicTrackingRoutingModule { }
