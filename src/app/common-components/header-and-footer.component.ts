import { Component, EventEmitter, Output } from '@angular/core';
import { CartService } from './utils/cart.service';
@Component({
  selector: 'app-headerandfooter',
  template: `<html>
  <body>
  <div  [ngClass]="{ blur: isCartOpen }" class="main-box">
  <!-- header html -->
  <div class="header">

      <span routerLink="/" class="logo-title">
          <img id="logo" src="./assets/kicklogo.svg">
          
          <p id="p1">KICKSTARTERS</p>
          <p id="p1-mobile">KICKSTARTERS</p>
      </span>
      <span class="right"> 
          <a routerLink="/support" id="FAQs">FAQs</a>
         
          <a routerLink="" id="contact">Contact Us</a>
         
          <a   class="bag"><img (click)="openCart()" style="" src="./assets/bag.svg"></a>
          <a class="cart-count">{{ cartCount }}</a>
         
      </span>
    
    

  </div>
  <app-cart *ngIf="isCartOpen"></app-cart>
  <!-- content html -->

 <ng-content></ng-content>


  <!-- footer html -->
  <div class='footer'>
      <div class="mid-foot">
          <div class="mid-left">
              <div style="display:flex;flex-direction: column;gap:3vh;">
                  <a style="font-weight: 600;font-size: 16px;">Shop</a>
                  <a id ="list-features" >Items</a>
                  <a id ="list-features" >Kits</a>
                  <a id ="list-features" >Accessories</a>
              </div>
              <div style="display:flex;flex-direction: column;gap:3vh;">
                  <a  style="font-weight: 600;font-size: 16px;">Help</a>
                  <a id ="list-features">About</a>
                  <a  routerLink="/support" id ="list-features">FAQ</a>
                  <a id ="list-features">Returns policy</a>
              </div>
              <div style="display:flex;flex-direction: column;gap:3vh;">
                  <a style="font-weight: 600;font-size: 16px;">Follow</a>
                  <a  id ="list-features">Twitter</a>
                  <a  id ="list-features">Instagram</a>
                  <a  id ="list-features">Facebook</a>
              </div>
          </div>
          <div class="mid-right">
              <p>Discover Everyday Essentials Delivered Right to Your<br> Doorstep</p>
          </div>
      </div>
      <div class="end-foot">
          <div style="width:75%">
              <p style="color: #000;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 25.2px; /* 180% */">© 2023 Unikits.<br>
              <p style="margin-top: -1vh;color: #000;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 25.2px;
              text-decoration-line: underline;">Privacy Policy, Terms of Service.</p>

          </div>
          <div  class="payment">
              <img src="./assets/Visa.svg">
              <img src="./assets/Mastercard.svg">
              <img src="./assets/Discover.svg">
              <img src="./assets/Amex.svg">
              <img src="./assets/PayPal.svg">
              <img src="./assets/GooglePay.svg">
              <img src="./assets/ApplePay.svg">

          </div>
      </div>
  </div>
</div>
</body>
</html>`,
styles: [
    `
    
.cart-count {
  background-color: red;
  color: white;
  font-size: 12px;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  text-align: center;
  line-height: 18px;
  margin:-15px -8px 23px;
  
  border:1px solid black;
  
}
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        height: 20px;
      }
    .main-box{
        width: 100%;
        height:auto ;
    }
    .header{
        width: 100%;
        height: auto;
        background-color: #FFFFFF;
        display: flex;
        justify-content:space-between;
    align-items: flex-start;
    position:fixed;
    z-index:2;

   
    }
    .logo-title{
        display: flex;
        padding-left: 2vw;
        gap:8px;
        cursor: pointer;
    }
    #p1{
        color: #000;
    font-family: Average Sans;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px; /* 100% */
    letter-spacing: 7px;
    text-transform: uppercase;
    }
    .bag{
       
      
     
     
}
.FAQs-mobile,.contact-mobile,#p1-mobile,#logo-mobile{
    display:none;
}

    .right{
      display: flex;
      
      padding:30px 35px 0 0 ;
    }
    #FAQs{
        color: #000;
    font-family: 'Inter';
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 21px;
    padding-right: 4vh;
    }
    #contact{
        color: #000;
        font-family: 'Inter';
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
        padding-right: 2vh;
    }
    .footer{
    width:100%;
    height:auto;
    border-top: 1px solid #E3E3E3;
    margin-top:5vh;
    }
    .mid-foot{
       
        
        display: flex;
       
      
    }
    
    .mid-left{
        width:75%;
        display: flex;
        gap:5vw;
        color: #000;
        font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 16.8px;
    padding-top: 10vh;
    padding-left: 2vw;
    }
    .mid-right{
        width:25%;
        color: #000;
    font-family: 'Inter';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 25.2px; 
    
    padding-top: 7vh;
    
    }
    .end-foot{
          padding-left: 2vw;
        display: flex;
        padding-top: 8vh;
      
    }
    .payment{
        width: 25%; 
        height: 24px;
        padding-top:10px;
        gap:1vw;
        display: flex;
    }
//    Mobile screen css 
@media (max-width: 640px) {

    .header{
        align-items:center;
    }
    .logo-title{
        width:65%;
       
    }
    .cart-count {
    border:1px solid black;
    margin:0px -20px 23px;
    width:15px;
    height:15px;
    line-height:15px;
    }
    .bag{
        padding-left:65px;
    }
    .right{ width:35%;
       
    align-items:center;

padding:0;
padding-top:5px;

gap:15px;}
    
  
    #FAQs,#contact,#p1,{
        display:none;
    }
    .FAQs-mobile,.contact-mobile,#p1-mobile,#logo-mobile{
        display:block;
       font-weight:100;
    }
    #p1-mobile{
        
            color: #000;
        font-family: 'Average Sans';
        font-size: 14x;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 100% */
        letter-spacing: 3px;
        text-transform: uppercase;
        
    }
    .mid-foot{
       display: flex;
       flex-direction:column;
       padding-left:15px;
       }
       .end-foot{
        flex-direction: column-reverse;
        padding-left:25px;
        margin-top:0px;
       }
       .mid-right{
        width:auto;
        white-space: nowrap; /* Prevents line breaks */
        overflow: hidden; /* Hide overflowing text */
        text-overflow: ellipsis; 
        font-size:10px;
        font-weight:600;
        margin-top:0px;
       padding-left:16px;
       }
       .mid-left{
           gap:15px;
           width:100%;
           
         
       }
       .payment{
        margin-top:0px;
       }
    #list-features{
        font-size:14px;
    }
    .footer{
        background-color:#E9ECEF;
    }
}

    `
  ]
})
export class HeaderAndFooterComponent {
    cartCount: number = 0;

    constructor(private cartService: CartService) {}
  
    ngOnInit() {
      this.cartService.cartCount$.subscribe(count => {
        this.cartCount = count;
      });
    }
    isCartOpen = false; 

    openCart() {
      this.isCartOpen = !this.isCartOpen; 
    }
  
}



