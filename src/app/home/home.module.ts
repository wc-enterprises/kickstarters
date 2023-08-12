import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageRouting } from './home-routing.module';
import { ButtonComponent } from '../common-components/button.component';
import{HeaderAndFooterComponent} from '../common-components/header-and-footer.component';
import{ProductSectionComponent} from'../common-components/product-section.component';
import{QaComponent} from'../support/common/QA.component';
import{CartComponent}from'../shop/cart/cart.component';
import{CartItemComponent}from'../shop/cart/cart-item.component';

@NgModule({
  declarations: [HomepageComponent, ButtonComponent,HeaderAndFooterComponent,ProductSectionComponent,QaComponent,CartComponent,CartItemComponent],
  imports: [CommonModule, HomepageRouting],
})
export class HomeModule {
  
}
