import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { ProfileNavComponent } from "./profile-nav/profile-nav.component";
import { MyProfileComponent } from "./my-profile/my-profile.component";
import { AddresspageComponent } from "./addresspage/addresspage.component";
import { RecentlyViewpageComponent } from "./recently-viewpage/recently-viewpage.component";
import { UpdatePasswordComponent } from "./update-password/update-password.component";
import { WishlistpageComponent } from "./wishlistpage/wishlistpage.component";
import { EmptyOrderpageComponent } from "./empty-orderpage/empty-orderpage.component";
import { OrderPageComponent } from "./order-page/order-page.component";
import { MainAccountpageComponent } from "./main-accountpage/main-accountpage.component";

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
    {
      path: 'recently',
      component:RecentlyViewpageComponent,
    },
    {
      path: 'password',
      component:UpdatePasswordComponent,
    },
    {
      path: 'wishlist',
      component:WishlistpageComponent,
    },
    {
      path: 'emptyorder',
      component:EmptyOrderpageComponent,
    },
    {
      path: 'order',
      component:OrderPageComponent,
    },
    {
      path: 'mainaccount',
      component:MainAccountpageComponent,
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
  export class AccountPageRoutingModule {}
  