import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'payments',
    loadChildren: () =>
      import('../payments/payments.module').then((m) => m.PaymentsModule),
  },
  {
    path: 'shop',
    loadChildren: () => import('../shop/shop.module').then((m) => m.ShopModule),
  },
  {
    path: 'support',
    loadChildren: () =>
      import('../support/support.module').then((m) => m.SupportModule),
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('../blog-page/blog-page.module').then((m) => m.BlogPageModule),
  },
  {
    path: 'sidebar',
    loadChildren: () =>
      import('../sidebar/sidebar.module').then((m) => m.SideBarModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomepageRouting {}
