import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-productdetail',
  templateUrl: `product-detail.component.html`,
  styleUrls: [`product-detail.component.css`],
  
  
})
export class ProductDetailComponent implements OnInit{
    @Input() panelTitle: string = '';
  isExpanded: boolean = false;
 
 postalCode: string = '';
  deliveryDate: string = '';
  codAvailable: boolean = false;
  

  ngOnInit(): void {}

  togglePanel() {
    this.isExpanded = !this.isExpanded;
  }
  checkDelivery() {
    // Implement the logic to check delivery availability and estimate delivery date
    // You can make an API call here to fetch the information based on the postalCode.
    // Update this.codAvailable and this.deliveryDate accordingly.
  }
  
}