import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { ProfileNavComponent } from "./profile-nav/profile-nav.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { AddresspageComponent } from "./addresspage/addresspage.component";
const routes: Routes = [
    {
      path: 'profilenav',
      component: ProfileNavComponent,
    },
    {
      path: 'myprofile',
      component:MyProfileComponent,
    },
    {
      path: 'address',
      component:AddresspageComponent,
    },
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AccountPageRoutingModule {}
  