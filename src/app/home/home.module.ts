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
import{PaymentsComponent }from'../payments/payment.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomepageComponent, ButtonComponent,HeaderAndFooterComponent,ProductSectionComponent,QaComponent,CartComponent,CartItemComponent,PaymentsComponent],
  imports: [CommonModule, HomepageRouting,FormsModule],
})
export class HomeModule {
  
}
