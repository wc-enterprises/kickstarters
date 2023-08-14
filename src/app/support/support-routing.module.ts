import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { FAQComponent } from './faq.component';

const routes: Routes = [
  {
    path: '',
    component: FAQComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupportRoutingModule {}
