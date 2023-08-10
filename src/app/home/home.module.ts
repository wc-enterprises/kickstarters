import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageRouting } from './home-routing.module';
import { ButtonComponent } from '../common-components/button.component';
import{HeaderAndFooterComponent} from '../common-components/header-and-footer.component'
import{ProductSectionComponent} from'../common-components/product-section.component'

@NgModule({
  declarations: [HomepageComponent, ButtonComponent,HeaderAndFooterComponent,ProductSectionComponent],
  imports: [CommonModule, HomepageRouting],
})
export class HomeModule {
  temp(){
    const a = Math.floor(2);
  }
}
