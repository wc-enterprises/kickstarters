import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageRouting } from './home-routing.module';
import { ButtonComponent } from '../common-components/button.component';
import { HeaderAndFooterComponent } from '../common-components/header-and-footer.component';
import { ProductSectionComponent } from '../common-components/product-section/product-section.component';
import { QaComponent } from '../support/common/QA.component';
import { CartComponent } from '../shop/cart/cart/cart.component';
import { CartItemComponent } from '../shop/cart/cart-item/cart-item.component';
import { PaymentsComponent } from '../payments/payment.component';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { FAQComponent } from '../support/faq.component';
import { CartService } from '../services/cart.service';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { blogsection } from '../common-components/blog-section/blog-section.component';
import { BlogPage } from '../blog-page/blog-page.component';
 import { Login } from '../login-page/login.component';
 import {MatInputModule} from '@angular/material/input';
 import {MatFormFieldModule} from '@angular/material/form-field';
 
 import { RegisterForm } from '../register-form/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    HomepageComponent,
    ButtonComponent,
    HeaderAndFooterComponent,
    ProductSectionComponent,
    QaComponent,
    CartComponent,
    CartItemComponent,
    PaymentsComponent,
    FAQComponent,
    blogsection,
    BlogPage,
    Login,
    RegisterForm
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomepageRouting,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    BrowserAnimationsModule
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class HomeModule {}
