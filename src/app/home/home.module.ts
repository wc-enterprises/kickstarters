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
import { BlogSection } from '../common-components/blog-section/blog-section.component';
import { BlogPage } from '../blog-page/blog-page.component';
import { ProductFilter } from '../productfilter/productfilter.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { SideBar } from '../sidebar/sidebar.component';
import { Login } from '../login-page/login.component';
import { MatInputModule } from '@angular/material/input';
import { RegisterForm } from '../register-form/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccountPageModule } from '../Accountpage/accountpage.module';
import { ContactUsComponent } from '../contactus/contactus.component';
import { ReturnComponent } from '../return-policy/retrun.component';
import { BlogDetailComponent } from '../blogdetail-page/blogdetail-page.component';
import { ProductDetailComponent } from '../product-details/product-detail.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReturnExchangeComponent } from '../return/policy-exchange/return-exchange.component';
import { QuickViewDialogComponent } from '../quick-view-dialog/quick-view-dialog.component';

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
    BlogPage,
    ProductFilter,
    BlogSection,
    BlogPage,
    SideBar,
    Login,
    RegisterForm,
    BlogSection,
    BlogPage,
    BlogDetailComponent,
    ProductDetailComponent,
    ContactUsComponent,
    ReturnExchangeComponent,
    ReturnComponent,
    QuickViewDialogComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HomepageRouting,
    FormsModule,
    MatDialogModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    AccountPageModule,
    MatInputModule,
    MatFormFieldModule,
    MatExpansionModule,
    AccountPageModule,
  ],
  providers: [CartService],
  bootstrap: [AppComponent],
})
export class HomeModule {}
