import{Component}from '@angular/core';
@Component({
    selector: 'app-productfilter',
    templateUrl: `./productfilter.component.html`,
    styleUrls: [`./productfilter.component.css`],
  })
  export class ProductFilter{
showCollectionDropdown:boolean=false;
showSizeDropdown:boolean=false;
showColorsDropdown:boolean=false;
showOccassionDropdown:boolean=false;
showPriceDropdown:boolean=false;
showSleevesDropdown:boolean=false;

    toggleCollectionDropdown(){
      this.showCollectionDropdown = !this.showCollectionDropdown;
    }
    toggleSizeDropdown() {
      this.showSizeDropdown=!this.showSizeDropdown;
    }
    toggleColorsDropdown() {
      this.showColorsDropdown=!this.showColorsDropdown;
    }
    toggleOccassionDropdown() {
      this.showOccassionDropdown=!this.showOccassionDropdown;
    }
    togglePriceDropdown() {
      this.showPriceDropdown=!this.showPriceDropdown;
    }
    toggleDropdown() {
      this.showSizeDropdown=!this.showSizeDropdown;
    }
    toggleSleevesDropdown() {
      this.showSleevesDropdown=!this.showSleevesDropdown;
    }
  }
