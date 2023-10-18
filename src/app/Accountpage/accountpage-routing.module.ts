import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { ProfileNavComponent } from "./profile-nav/profile-nav.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
const routes: Routes = [
    {
      path: 'profilenav',
      component: ProfileNavComponent,
    },
    {
      path: 'myprofile',
      component:MyProfileComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AccountPageRoutingModule {}
  