import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '../home/homepage/homepage.component';
import { QuickViewDialogComponent } from './quick-view-dialog.component';
const routes: Routes = [
  {
    path: '',
    component: QuickViewDialogComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QuickViewDialogRoutingModule {}