import { Component } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  template: `<div *ngFor=" let cart of cartItems" class="cartitem">
  <img [src]="cart.imgUrl" >
  <div class="box">
  <div class="box1">
  <p>{{cart.title}}</p>
  <p>{{cart.rate}}<p>
  </div>
  <p style="margin-top:-1vh;">Quantity</p>
  <div class="quantity-selector">
 
  <button *ngIf="quantity > 1" style="border-radius: 3.333px 0px 0px 3.333px;" class="decrement-button" (click)="decrementQuantity()">-</button>
  <img *ngIf="quantity <= 1" style="width:15px;" class="delete-basket-icon" (click)="deleteItem()" src="./assets/delete1.svg">
  <div class="quantity-number">{{ quantity }}</div>
  <button class="increment-button" style="border-radius: 0px 3.333px 3.333px 0px;" (click)="incrementQuantity()">+</button>
</div>

  </div>
  </div>`,
  styles:[`.cartitem{
      display:flex;
      gap:1vw;
      padding:4vh 0 0 2vw;
     
  }
  .box1{
      width:22vw;
      display:flex;
      justify-content:space-between;
      color: #000;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 21px; /* 140% */

  }
  .quantity-selector {
    display: flex;
    width:10vw;
    align-items: center;
    margin:-2vh 0vw 0 -0.6vw;
    padding: 11px;
  
   
  }
  
  .decrement-button,
  .increment-button,
 
  {
 
    display: flex;
    height: 40px;
    padding: 11.667px;
    justify-content: center;
    align-items: center;
    border-radius: 3.333px 0px 0px 3.333px;
border: 0.833px solid var(--border-border-inactive, #8996A2);
opacity: 0.38;
background: var(--background-background-primary, #FFF);
  }
  .delete-basket-icon{
    display: flex;
    height: 15px;
    padding: 11.667px;
    justify-content: center;
    align-items: center;
    border-radius: 3.333px 0px 0px 3.333px;
border: 0.833px solid var(--border-border-inactive, #8996A2);
opacity: 0.38;
background: var(--background-background-primary, #FFF);
  }
  
  .quantity-number {
    
    display: flex;
    width: 50px;
    height: 40px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border: 0.833px solid var(--border-border-inactive, #8996A2);
    background: var(--background-background-primary, #FFF);


  }
  
  `]
})
export class CartItemComponent {

    cartItems=[{
        imgUrl:'./assets/washingcart.svg',title:'Laundry Bag',rate:'£44',
        
    },
{ imgUrl:'./assets/washingcart.svg',title:'Laundry Bag',rate:'£44',},
{
    imgUrl:'./assets/washingcart.svg',title:'Laundry Bag',rate:'£44',
    
},
{
    imgUrl:'./assets/washingcart.svg',title:'Laundry Bag',rate:'£44',
    
},
]

quantity: number = 1;

decrementQuantity() {
  if (this.quantity > 1) {
    this.quantity--;
  }
}

incrementQuantity() {
  this.quantity++;
}

deleteItem() {
  // Implement your delete logic here
  console.log('Item deleted');
}
}