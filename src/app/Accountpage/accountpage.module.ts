import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountPageRoutingModule } from './accountpage-routing.module';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
@NgModule({
  declarations: [
    ProfileNavComponent,
    MyProfileComponent
  ],

  imports: [CommonModule,  AccountPageRoutingModule,MatFormFieldModule,MatInputModule],
})
export class AccountPageModule {}