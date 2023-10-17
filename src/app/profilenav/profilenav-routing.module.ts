import { RouterModule, Routes } from "@angular/router";
import { ProfileNavModule } from "./profilenav.module";
import { NgModule } from "@angular/core";
const routes: Routes = [
    {
      path: '',
      component: ProfileNavModule,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProfileNavRoutingModule {}
  