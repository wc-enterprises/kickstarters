import{Component}from'@angular/core';
@Component({
    selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: [`./sidebar.component.css`],

})
export class SideBar{
    sidebarWidth: string = '0';
    showEssentialsDropdown: boolean = false;
    showBedroomDropdown:boolean=false;
    showFoodDropdown:boolean=false;
    showLaundryDropdown:boolean=false;
    showFashionDropdown:boolean=false;
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
  toggleBedroomDropdown() {
    this.showBedroomDropdown = !this.showBedroomDropdown;
  }
  toggleFoodDropdown(){
    this.showFoodDropdown=!this.showFoodDropdown;
  }
  toggleLaundryDropdown(){
    this.showLaundryDropdown=!this.showLaundryDropdown;
  }
  toggleFashionDropdown(){
    this.showFashionDropdown=!this.showFashionDropdown;
  }
} 