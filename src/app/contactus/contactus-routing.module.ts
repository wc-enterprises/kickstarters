import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { ContactUsComponent } from './contactus.component';
const routes: Routes = [
  {
    path: '',
    component: ContactUsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContactUsRoutingModule {}