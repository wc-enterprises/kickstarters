import { Component, NgModule } from '@angular/core';
import { HomepageComponent } from '../home/homepage/homepage.component';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',

})

    
export class AccountPageComponent {
  activeMenuItem: string = 'myprofile';

  setActiveMenuItem(item: string): void {
    this.activeMenuItem = item;
  }

  isActiveMenuItem(item: string): boolean {
    return this.activeMenuItem === item;
  }
}