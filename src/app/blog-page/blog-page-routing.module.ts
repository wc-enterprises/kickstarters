import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { blogpage } from './blog-page.component';
const routes: Routes = [
  {
    path: '',
    component: blogpage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BlogModule {}