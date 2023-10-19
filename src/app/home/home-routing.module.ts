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
    path: 'login',
    loadChildren: () =>
      import('../login-page/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'registerform',
    loadChildren: () =>
      import('../register-form/register.module').then((m) => m.RegisterFormModule),
  },
  {
    path: 'productdetail/:id',
    loadChildren: () =>
      import('../product-details/product-detail.module').then((m) => m.productdetailModule),
  },

  {
    path: 'blogdetail/:id',
    loadChildren: () =>
      import('../blogdetail-page/blogdetail.module').then((m) => m.BlogDetailModule),
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class HomepageRouting {}
