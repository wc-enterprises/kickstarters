import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageRoutingModule } from './accountpage-routing.module';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { AddresspageComponent } from './addresspage/addresspage.component';
import { RecentlyViewpageComponent } from './recently-viewpage/recently-viewpage.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { WishlistpageComponent } from './wishlistpage/wishlistpage.component';
import { EmptyOrderpageComponent } from './empty-orderpage/empty-orderpage.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { MainAccountpageComponent } from './main-accountpage/main-accountpage.component';

@NgModule({
  declarations: [
    ProfileNavComponent,
    MyProfileComponent,
    AddresspageComponent,
    RecentlyViewpageComponent,
    UpdatePasswordComponent,
    WishlistpageComponent,
    EmptyOrderpageComponent,
    OrderPageComponent,
    MainAccountpageComponent
  ],

  imports: [CommonModule,  AccountPageRoutingModule,MatFormFieldModule,MatInputModule, FormsModule],
})
export class AccountPageModule {}