import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  template: `<html>
  <body>
  <button (click)="openCart()">Add to cart</button>
  <app-cart *ngIf="isCartOpen"></app-cart>
  </body>
  </html>`,
  styles:[`button{


border: none;
width:100%;
color: #FFF;
font-family: 'Inter';
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 21px;
display: flex;
cursor:pointer;
padding: 10px;
justify-content: center;
align-items: center;
gap: 10px;
align-self: stretch;
border-radius: 99px;
background: #000;
 }`]
})
export class ButtonComponent {
  
  isCartOpen = false; 

  openCart() {
    this.isCartOpen = !this.isCartOpen; 
  }
}
