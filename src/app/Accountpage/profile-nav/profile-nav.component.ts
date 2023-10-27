import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-nav',
  templateUrl: './profile-nav.component.html',
  styleUrls: ['./profile-nav.component.scss']
})
export class ProfileNavComponent {
  activeMenuItem: string = 'myprofile';

  setActiveMenuItem(item: string): void {
    this.activeMenuItem = item;
  }

  isActiveMenuItem(item: string): boolean {
    return this.activeMenuItem === item;
  }
}
