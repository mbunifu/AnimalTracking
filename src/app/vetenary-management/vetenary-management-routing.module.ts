import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VetenaryComponent } from './vetenary/vetenary.component';

const routes: Routes = [
  {
    path : 'vetenary', component : VetenaryComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VetenaryManagementRoutingModule { }
