import{Component}from '@angular/core';
@Component({
    selector: 'app-productfilter',
    templateUrl: `./productfilter.component.html`,
    styleUrls: [`./productfilter.component.css`],
  })
  export class ProductFilter{
    selectedCollection: string = ''; // to store the selected collection
    productName: string = ''; // to store the selected product name
    productQuantity: number | null = null;
  }
