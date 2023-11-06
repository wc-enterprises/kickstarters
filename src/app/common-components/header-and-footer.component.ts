import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartComponent } from '../shop/cart/cart/cart.component';
@Component({
  selector: 'app-headerandfooter',
  template: `<html>
    <body>
      <div [ngClass]="{ blur: isCartOpen }" class="main-box">
        <!-- header html -->
        <div class="header">
          <span id="sidebar-icon"><app-sidebar></app-sidebar></span>
         <span routerLink="/" class="logo-title">
            <img id="logo" src="./assets/kicklogo.svg" />
            <p id="p1">KICKSTARTERS</p>
            <p id="p1-mobile">KICKSTARTERS</p>
          </span>
          <span class="right">
          <img id="menuicon1"  routerLink="/profilenav"  src="./assets/accounticon1.svg"/>

            <img id="menuicon2"  routerLink="" src="./assets/searchicon1.svg">

            <img id="menuicon3"  routerLink="" src="./assets/hearticon.svg">

            <ng-container *ngIf="!isCartOpen">
              <div class="bag" (click)="openCart()">
                <img id="bag" src="./assets/carticon.svg"/>
              </div>
            </ng-container>

            <a *ngIf="cartCount > 0" class="cart-count">{{ cartCount }}</a>
          </span>
         </div>
        <app-cart
          [isCartOpen]="isCartOpen"
          (closeCart)="closeCart()"
        ></app-cart>
        <!-- content html -->

        <ng-content></ng-content>

        <!-- footer html -->
        <div class="footer">
          <div class="mid-foot">
            <div class="mid-left">
              <!-- <div style="display:flex;flex-direction: column;gap:3vh;">
                <a style="font-weight: 600;font-size: 16px;">Shop</a>
                <a id="list-features">Items</a>
                <a id="list-features">Kits</a>
                <a id="list-features">Accessories</a>
              </div> -->
        <div class="inner-mid-left">
              <span routerLink="/" class="logo-title">
            <img  id="logo" src="./assets/kicklogo.svg" />
            <p id="p1-mobile">KICKSTARTERS</p>
            <p id="p1">KICKSTARTERS</p>
          </span>
          <p>
                Discover Everyday Essentials Delivered Right to <br/>Your
                Doorstep
              </p>
              <div style="display:flex;">
              
                <a id="list-features"
                  ><img class="svg-img"  src="./assets/twit.svg" />
                  <img src="./assets/insta.svg" />
                  <img src="./assets/fb.svg" />
                  <img src="./assets/you-tube.svg" />
               </a>
              </div>

         </div>
              <div style="display:flex;flex-direction: column;gap:3vh;padding-top:27px;">
                <a style="font-weight: 600;font-size: 16px;">Help</a>
                <a routerLink="/contactus" id="list-features">Contact us</a>
                <a routerLink="/support" id="list-features">FAQ</a>
                <a  routerLink="/blog" id="list-features">Blogs</a>
                <a routerLink="/return" id="list-features">Returns policy</a>
              </div>
             
             
            </div>
            <div class="mid-right">
              <!-- <p>
                Discover Everyday Essentials Delivered Right to Your<br />
                Doorstep
              </p> -->
              <div style="gap:25px;display:flex; flex-direction:column;">
              <div id="right-box">CUSTOMER CARE</div>
              <a id="list-features1">
                <div>10 AM - 6.00 PM</div>
                <img class="svg-img"  src="./assets/clock.svg" />
              </a>
              <a id="list-features1">
                <div>+91 9874563210</div>
                <img class="svg-img"  src="./assets/phone.svg" />
              </a>
              <a id="list-features1">
                <div>support@kickstarters.co.in</div>
                <img class="svg-img"  src="./assets/mail.svg" />
              </a>
          </div>
            </div>
          </div>
          <div class="end-foot">
            <div style="width:75%">
              <p
                style="color: #000;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 25.2px; /* 180% */"
              >
                © 2023 Unikits.<br />
              </p>
              <p
                style="margin-top: -1vh;color: #000;
              font-family: Inter;
              font-size: 14px;
              font-style: normal;
              font-weight: 400;
              line-height: 25.2px;
              text-decoration-line: underline;"
              >
                Privacy Policy, Terms of Service.
              </p>
            </div>
            <div class="payment">
              <img src="./assets/Visa.svg" />
              <img src="./assets/Mastercard.svg" />
              <img src="./assets/Discover.svg" />
              <img src="./assets/Amex.svg" />
              <img src="./assets/PayPal.svg" />
              <img src="./assets/GooglePay.svg" />
              <img src="./assets/ApplePay.svg" />
            </div>
          </div>
        </div>
      </div>
    </body>
  </html>`,
  styles: [
    `
    body{
      font-family: 'Average Sans';
    }
      .cart-count {
        background-color: red;
        color: white;
        font-size: 12px;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        text-align: center;
        line-height: 18px;
        font-family: 'Inter';
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-210%, 80%);
        z-index: 1;
      }

      a {
        text-decoration: none;
        color: inherit;
        cursor: pointer;
        height: 20px;
      }
      .main-box {
        width: 100%;
        height: auto;
      }
      .header {
        width: 100%;
        height: auto;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items:center;
        position: fixed;
        z-index: 2;
        

       
       }
       #sidebar-icon{
        display:flex;
        align-items:center;
        width:250px;
        padding-left:25px;
        padding-bottom:5px;
       }
      .logo-title {
        display: flex;
        gap: 8px;
        cursor: pointer;
       
      }
      #p1 {
        color: #000;
        font-family: 'Average Sans';
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: 24px; /* 100% */
        letter-spacing: 7px;
        text-transform: uppercase;
      }

      .FAQs-mobile,
      .contact-mobile,
      #p1-mobile,
      #logo-mobile {
        display: none;
      }

      .right {
        width:220px;
        align-items:center;
        display: flex;
        gap:24px;
       
      }
      #menuicon{
        cursor:pointer;
      }
      #sidebar{
        width:250px;
        background-color:blue;
      }
      #FAQs {
        color: #000;
        font-family: 'Inter';
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
        padding-right: 20px;
      }

      #contact {
        color: #000;
        font-family: 'Inter';
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px;
      }
      .footer {
        width: 100%;
        height: auto;
        border-top: 1px solid #e3e3e3;
        margin-top: 50px;
        background-color:#F7F9FB;
      }
      .mid-foot {
        display: flex;
        
      }

      .mid-left {
        width: 70%;
        display: flex;
        gap: 50px;
        color: #000;
        
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16.8px;
        padding-top: 30px;
        padding-left: 35px;
        
      }
      #list-features {
        width: 100%;
        height: auto;
        display: flex;
        gap:20px;
      }
      #list-features1 {
        width: 100%;
        height: auto;
        display: flex;
        justify-content: flex-end;
        gap:8px;
    
      }
      .mid-right {
        width: 25%;
        color: #000;
         font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.2px;
        padding-top: 30px;
        
      }
      .end-foot {
        padding-left: 35px;
        display: flex;
        padding-top: 75px;
      }
      .payment {
        width: 25%;
        height: 24px;
        padding-top: 10px;
        gap: 15px;
        display: flex;
      }

      .bag {
    
        cursor: pointer;
        position: relative;
        z-index: 0; 
      }
      .inner-mid-left{
           display:flex;
           flex-direction:column;
           gap:10px;      
          }
          #right-box{
            text-align: right;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            padding-top:30px;
          }


      @media (max-width: 640px) {
        .header {
          align-items: center;
  
        }
        #sidebar-icon{
          padding-left:15px;
        }
        .logo-title {
          width: 100%;
          
        }
        .cart-count {
          border: 1px solid black;
          width: 15px;
          height: 15px;
          line-height: 15px;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-20%, 50%);
          z-index: 1;
         }
        #menuicon1,#menuicon3{
          display:none;
        }
       
        .right {
          width:250px;
          align-items: center;
          padding-right:12px;
          padding-top: 5px;
          gap:8px;
         justify-content:flex-end;
        }

        #FAQs,
        #contact,
        #p1 {
          display: none;
        }
        .FAQs-mobile,
        .contact-mobile,
        #p1-mobile,
        #logo-mobile {
          display: block;
          font-weight: 100;
        }
        #p1-mobile {
          color: #000;
          font-family: 'Average Sans';
          font-size: 14x;
          font-style: normal;
          font-weight: 400;
          line-height: 24px; /* 100% */
          letter-spacing: 3px;
          text-transform: uppercase;
        }
        .mid-foot {
          display: flex;
          flex-direction: column;
          padding-left: 15px;
        }
        .end-foot {
          flex-direction: column;
          padding-left:15px;
          margin-top: 0px;
        }
        .mid-right {
          width: auto;
          white-space: nowrap; /* Prevents line breaks */
          overflow: hidden; /* Hide overflowing text */
          text-overflow: ellipsis;
          font-size: 10px;
          font-weight: 600;
          margin-top: 0px;
        
        }
        .mid-left {
          gap: 10px;
          width: 100%;
          padding-left: 5px;
          display: flex;
          flex-direction: column;
        }
        .payment {
          margin-top: 0px;
          gap:5px;
        }
        #list-features {
          font-size: 14px;
        }
        #right-box{
          text-align:left;
        }
        #list-features1{
          display:flex;
          flex-direction: row-reverse;
  }
        .footer {
          background-color: #e9ecef;
         
        }
        #bag,#menuicon2{
          width:22px;
          height:22px;
        }
      }
    
    `,
  ],
})
export class HeaderAndFooterComponent {
  isCartOpen = false;
  isBackgroundBlurred = false;

  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }

  openCart() {
    this.isCartOpen = true;
    this.isBackgroundBlurred = true;
  }

  closeCart() {
    this.isCartOpen = false;
    this.isBackgroundBlurred = false;
  }
}
