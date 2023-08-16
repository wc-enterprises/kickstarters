import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-headerandfooter',
  template: `<div  [ngClass]="{ blur: isCartOpen }" class="main-box">
  <!-- header html -->
  <div class="header">

      <span routerLink="/" class="logo-title">
          <img src="./assets/kicklogo.svg">
          <p id="p1">KICKSTARTERS</p>
      </span>
      <span class="right">
          <a routerLink="/support" id="FAQs">FAQs</a>
          <a routerLink="" id="contact">Contact Us</a>
          <a  (click)="openCart()" class="bag"><img  style="" src="./assets/bag.svg"></a>
         
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
                  <a>Items</a>
                  <a>Kits</a>
                  <a>Accessories</a>
              </div>
              <div style="display:flex;flex-direction: column;gap:3vh;">
                  <a style="font-weight: 600;font-size: 16px;">Help</a>
                  <a>About</a>
                  <a>FAQ</a>
                  <a>Returns policy</a>
              </div>
              <div style="display:flex;flex-direction: column;gap:3vh;">
                  <a style="font-weight: 600;font-size: 16px;">Follow</a>
                  <a>Twitter</a>
                  <a>Instagram</a>
                  <a>Facebook</a>
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
</div>`,
styles: [
    `
    
    a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        height: 20px;
      }
    .main-box{
        width: auto;
        height:auto ;
    }
    .header{
        width: 100%;
        height: 10vh;
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
       
       
       border-radius: 99px;
     
      
    
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
        margin-top: 3vh;
        gap:1vw;
        display: flex;
     
     
    }
//    Mobile screen css 
@media (max-width: 640px) {
    .header{
        border:1px solid black;
        width:400vw;
    }
}
    `
  ]
})
export class HeaderAndFooterComponent {
 
    isCartOpen = false; 

    openCart() {
      this.isCartOpen = !this.isCartOpen; 
    }
  
}



