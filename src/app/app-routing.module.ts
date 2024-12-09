import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AuthGuard } from "./core/guard/auth.guard";
import { Role } from "./core/models/role";
import { AuthLayoutComponent } from "./layout/app-layout/auth-layout/auth-layout.component";
import { MainLayoutComponent } from "./layout/app-layout/main-layout/main-layout.component";
import { Page404Component } from "./authentication/page404/page404.component";
// import path from "path";
const routes: Routes = [
  {
    path: "",
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      { path: "", redirectTo: "/authentication/signin", pathMatch: "full" },
      
        {path: "user",
        canActivate: [AuthGuard],
        data: {
          role:Role.User,
        },
      },
       {path:"user",
       loadChildren: ()=>

      import("./user/user.module").then((m) => m.UserModule),},
      
  {
    path:"geographic-tracking",
    loadChildren: () =>
      import("./geographic-tracking/geographic-tracking.module").then((m) => m.GeographicTrackingModule),
  },
  {
    path:"population-health",
    loadChildren: () =>
      import("./population-health/population-health.module").then((m) => m.PopulationHealthModule),
  },

  {
    path:"onboarding",
    loadChildren: () =>
      import("./onboarding/onboarding.module").then((m) => m.OnboardingModule),
  },

{
  path: "dashboard",
  loadChildren: () =>
    import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
},

{
  path: "weather-data",
  loadChildren: () =>
    import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
},
{
  path: "alerts",
  loadChildren: () =>
    import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
},

{
  path: "report-analytics",
  loadChildren: () =>
    import("./dashboard/dashboard.module").then((m) => m.DashboardModule),
},

{
  path: "user-management",
  loadChildren: () =>
    import("./user-management/user-management.module").then((m) => m.UserManagementModule),
},
  

  
        
  
        
    ],
  },

  {
    path: "authentication",
    component: AuthLayoutComponent,
    loadChildren: () =>
      import("./authentication/authentication.module").then(
        (m) => m.AuthenticationModule
      ),
  },
 
  { path: '**', component: Page404Component },


]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule { }