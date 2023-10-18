import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { TestComponent } from './test/test.component';
import {MatInputModule} from '@angular/material/input';
 import {MatFormFieldModule} from '@angular/material/form-field';

@NgModule({
  declarations: [
    TestComponent
  ],
  imports: [CommonModule, LoginRoutingModule,MatInputModule,MatFormFieldModule],
})
export class LoginModule {}
