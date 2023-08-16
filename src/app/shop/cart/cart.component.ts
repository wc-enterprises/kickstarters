import { Component } from '@angular/core';

@Component({
  selector: 'app-cart',
  template: `<div *ngIf="isCartOpen" class="cart">
  <div class="header">
 
 <div class="inner-head"> <img src="./assets/bag.svg">
  <div style="color: #444;
  padding-top:2px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
">4items</div>
  </div>
  <img (click)="closeCart()" style="padding:2px 3vw 0 0; cursor: pointer;"src="./assets/xcircle.svg">
  </div>
  <div style="height:70vh;  overflow-y: auto; overflow-x:hidden;"><app-cartitem></app-cartitem></div>
  <div class="footer">
  <div style="display:flex; flex-direction:row;justify-content:space-between;"> 
  <p style="padding-left:3vw; color: var(--netural-grey-500, #667085);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;">Order Total</p>
  <span style="padding-top:2.5vh; padding-right:3.5vw;  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px; ">£44</span>
  </div>
  <button routerLink="payments">Proceed to Checkout</button>
  </div>
</div>
`,
styles:[`.cart {
   background-color: #FFFFFF;
  color: black;
  width:30vw;
  height:100vh;
  position:fixed;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.5);
 transition: right 0.3s ease-in-out;
 right: -30px;
 z-index: 20;
}
.header{
  display:flex;
  justify-content:space-between;
  padding:5vh 0 0 2vw;
  align-items:center;
  height:auto;
}
.inner-head{
  display:flex;
  width:5vw;
  gap:1vw;
}
button{
  display: flex;
width:25vw;
padding: 16px 10px;
justify-content: center;
align-items: center;
gap: 10px;
border-radius: 99px;
background: #000;
margin-left:2vw;
color: #FFF;
font-family: Inter;
font-size: 15px;
font-style: normal;
font-weight: 600;
line-height: 21px; /* 140% */
cursor:pointer;
}
.footer{
  padding-bottom:3vh;
}
`]
})
export class CartComponent {
  isCartOpen = true;

  closeCart() {
    this.isCartOpen = !this.isCartOpen;
  }
}
