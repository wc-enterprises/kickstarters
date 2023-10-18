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
@NgModule({
  declarations: [
    ProfileNavComponent,
    MyProfileComponent,
    AddresspageComponent,
    RecentlyViewpageComponent
  ],

  imports: [CommonModule,  AccountPageRoutingModule,MatFormFieldModule,MatInputModule, FormsModule],
})
export class AccountPageModule {}