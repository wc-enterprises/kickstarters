import{Component}from '@angular/core';
@Component({
    selector: 'app-productfilter',
    templateUrl: `./productfilter.component.html`,
    styleUrls: [`./productfilter.component.css`],
  })
  export class ProductFilter{
showCollectionDropdown:boolean=false;

    toggleCollectionDropdown(){
      this.showCollectionDropdown = !this.showCollectionDropdown;
    }
    toggleEssentialsDropdown() {
      
    }
  }
