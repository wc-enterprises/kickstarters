import { RouterModule, Routes } from '@angular/router';
import {ProductFilter} from'./productfilter.component';
import { NgModule } from '@angular/core';
const routes: Routes = [
  {
    path: '',
    component: ProductFilter,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductFilterRoutingModule {}