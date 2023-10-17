import { RouterModule, Routes } from "@angular/router";
import { Profile } from "./profile.component";
import { NgModule } from "@angular/core";
const routes: Routes = [
    {
      path: '',
      component: Profile,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class ProfileRoutingModule {}
  