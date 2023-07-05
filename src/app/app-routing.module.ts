import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { ErrorPageComponent } from "./error-page/error-page.component";

const appRoutes: Routes = [
  // { path: "", component: HomeComponent },
  // {
  //   path: "customers",
  //   loadChildren: "../app/customers/customers.module#CustomersModule"
  // },
  {
    path: "",
    loadChildren: "../app/user/user.module#UsersModule",
  },
  {
    path: "**",
    component: ErrorPageComponent
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {}
