import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



const routes: Routes = [

  {
    path:"farmers",
    loadChildren: () =>
      import("./farmers/farmers.module").then((m) => m.FarmersModule)
  },
  {
    path:"agrodealers",
    loadChildren: () =>
      import("./agrodealers/agrodealers.module").then((m) => m.AgrodealersModule)
  },
  {
    path:"transporters",
    loadChildren: () =>
      import("./transporters/transporters.module").then((m) => m.TransportersModule)
  },
  {
    path:"warehouse",
    loadChildren: () =>
      import("./warehouse/warehouse.module").then((m) => m.WarehouseModule)
  },
  {
    path:"organisation",
    loadChildren: () =>
      import("./organisation/organisation.module").then((m) => m.OrganisationModule)
  },





];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OnboardingRoutingModule { }
