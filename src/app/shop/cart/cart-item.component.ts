import { Component } from '@angular/core';

@Component({
  selector: 'app-cartitem',
  template: `<html>
  <body>
  <div *ngFor=" let cart of cartItems" class="cartitem">
  <img id="img" [src]="cart.imgUrl" >
  <div class="box">
  <div class="box1">
  <p id="title">{{cart.title}}</p>
  <p id="rate">{{cart.rate}}<p>
  </div>
  <p style="margin-top:-1vh;">Quantity</p>
  <div class="quantity-selector">
 
  <button *ngIf="quantity > 1" style="border-radius: 3.333px 0px 0px 3.333px;" class="decrement-button" (click)="decrementQuantity()">-</button>
  <button *ngIf="quantity <= 1"  class="delete-basket-icon"><img style="opacity: 0.5;" (click)="deleteItem()" src="./assets/delete1.svg"></button>
  <button class="quantity-number">{{ quantity }}</button>
  <button class="increment-button" style="border-radius: 0px 3.333px 3.333px 0px;" (click)="incrementQuantity()">+</button>
</div>

  </div>
  </div>
  </body>
  </html>`,
  styles:[`.cartitem{
      width:100%;
      display:flex;
      gap:15px;
      padding:40px 0 0 45px;
      
  }
  #rate{
    margin-left:40px;
  }
  .box1{
      width:auto;
      display:flex;
     gap:50px;
   
       color: #000;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 21px; /* 140% */



  }
  .quantity-selector {
    display: flex;
  align-items: center;
  margin:-8px -5px 0 0;
  
   
  }
  .increment-button,.decrement-button, .delete-basket-icon,.quantity-number {
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #ccc;
  cursor: pointer;
  
  }


//   mobile screen media query
@media (max-width:640px){
      #img{
           width:100px;
           height:100px;
      }
      #title{
          font-size:12px;
        
      }
      #rate{
        font-size:12px;
        margin-left:5px;
        
      }
      .quantity-selector {
        display: flex;
      align-items: center;
     margin:-10px -5px 0 0;
      }
      .increment-button,.decrement-button, .delete-basket-icon,.quantity-number {
        width: 28px;
        height: 28px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        cursor: pointer;
        }

.cartitem{
  padding:40px 0 0 15px;
 
}
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
