import{Component}from'@angular/core';
@Component({
    selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [`./sidebar.component.css`],

})
export class SideBar{
    sidebarWidth: string = '0';
    showEssentialsDropdown: boolean = false;

  openNav() {
    this.sidebarWidth = '250px';
  }

  closeNav() {
    this.sidebarWidth = '0';
    this.showEssentialsDropdown = false;

  }
  toggleEssentialsDropdown() {
    this.showEssentialsDropdown = !this.showEssentialsDropdown;
  }
}