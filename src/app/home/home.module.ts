import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage/homepage.component';
import { HomepageRouting } from './home-routing.module';
import { ButtonComponent } from '../common-components/button.component';
import{HeaderAndFooterComponent} from '../common-components/header-and-footer.component'
import{ProductSectionComponent} from'../common-components/product-section.component'
import{QaComponent} from'../support/common/QA.component'

@NgModule({
  declarations: [HomepageComponent, ButtonComponent,HeaderAndFooterComponent,ProductSectionComponent,QaComponent],
  imports: [CommonModule, HomepageRouting],
})
export class HomeModule {
  
}
