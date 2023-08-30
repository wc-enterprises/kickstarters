import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from './utils/cart.service';
@Component({
  selector: 'app-button',
  template: `<html>
  <body>
  <!-- <button>Add to cart</button> -->
  <div>
  <button (click)="addToCart()" [disabled]="isAddedToCart" [ngClass]="{ 'added-to-cart': isAddedToCart }">
    {{ isAddedToCart ? 'Added to Cart!' : 'Add to Cart' }}
  </button>
</div>
 
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
border-radius: 12px;
background: #000;
 }
 button.added-to-cart {
  background-color:#ffffff; /* Changed button color */
  color: #000000; /* Changed font color */
}
 .added-message {
  position: absolute;
  top: 0;
  left: 0;
  background-color: green;
  color: white;
  padding: 5px;
  border-radius: 5px;
}
//  mobile screen
@media (max-width:640px){
button{
  border-radius: 12px;
  padding: 5px;
  font-size: 12px;
}
}`]
})
export class ButtonComponent {
  constructor(private cartService: CartService) {}
  isCartOpen = false; 

  openCart() {
    this.isCartOpen = !this.isCartOpen; 
    
  }
  isAddedToCart: boolean = false;
  displayDuration: number = 2000;

  addToCart() {
    this.isAddedToCart = true;
    this.cartService.addToCart();
    setTimeout(() => {
      this.isAddedToCart = false;
    }, this.displayDuration);
  }
  @Output() addToCartClicked = new EventEmitter<void>();

 
    

}
