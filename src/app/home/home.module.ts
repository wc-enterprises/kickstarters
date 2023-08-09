import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageRouting } from './home-routing.module';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, HomepageRouting],
})
export class HomeModule {}
