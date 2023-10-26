import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReturnExchangeComponent } from './return-exchange.component';
import { HomepageComponent } from 'src/app/home/homepage/homepage.component';
const routes: Routes = [
  {
    path: '',
    component: ReturnExchangeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReturnExchangeRoutingModule {}