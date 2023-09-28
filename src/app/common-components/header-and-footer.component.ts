import { Component, EventEmitter, HostListener, Output, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartComponent } from '../shop/cart/cart/cart.component';
@Component({
  selector: 'app-headerandfooter',
  template: `<html>
    <body>
      <div [ngClass]="{ blur: isCartOpen }" class="main-box">
        <!-- header html -->
        <div [ngClass]="{ 'visible': showHeader }" class="header">
          <span routerLink="/" class="logo-title">
            <img id="logo" src="./assets/kicklogo.svg" />

            <p id="p1">KICKSTARTERS</p>
            <p id="p1-mobile">KICKSTARTERS</p> 
          </span>
          <span class="right">
            <a routerLink="/support" id="FAQs">FAQs</a>

            <a routerLink="" id="contact">Contact Us</a>

            <ng-container *ngIf="!isCartOpen">
              <div class="bag" (click)="openCart()">
                <img src="./assets/bag.svg" />
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

        <ng-content ></ng-content>

        <!-- footer html -->
        <div class="footer">
          <div class="mid-foot">
            <div class="mid-left">
              <div style="display:flex;flex-direction: column;gap:3vh;">
                <a style="font-weight: 600;font-size: 16px;">Shop</a>
                <a id="list-features">Items</a>
                <a id="list-features">Kits</a>
                <a id="list-features">Accessories</a>
              </div>
              <div style="display:flex;flex-direction: column;gap:3vh;">
                <a style="font-weight: 600;font-size: 16px;">Help</a>
                <a id="list-features">About</a>
                <a routerLink="/support" id="list-features">FAQ</a>
                <a id="list-features">Returns policy</a>
              </div>
              <div style="display:flex;flex-direction: column;">
                <a style="font-weight: 600;font-size: 16px;">Follow</a>
                <a id="list-features"
                  ><img class="svg-img"  src="./assets/twit.svg" />
                  <p style="margin-left: 1px;">Twitter</p>
                  <p></p
                ></a>
                <a id="list-features"
                  ><img src="./assets/insta.svg" />
                  <p style="margin-left: 1px;">Instagram</p></a
                >
                <a id="list-features"
                  ><img src="./assets/fb.svg" />
                  <p style="margin-left: 1px;">Facebook</p>
                  <p></p
                ></a>
                <a id="list-features"
                  ><img src="./assets/you-tube.svg" />
                  <p style="margin-left: 1px;">YouTube</p></a
                >
              </div>
            </div>
            <div class="mid-right">
              <p>
                Discover Everyday Essentials Delivered Right to Your<br />
                Doorstep
              </p>
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
        transform: translate(-120%, 100%);
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
        position: relative;
  margin-top: 0; /* Adjust as needed to accommodate the header */
  overflow-y: auto; /* Allow content to scroll */

      }
      .header {
        width: 100%;
        height: auto;
        background-color: #ffffff;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        position: fixed;
        z-index: 2;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.2); /* Optional: Add shadow to the header */
  transform: translateY(-100%); /* Initially hidden above the viewport */
  transition: transform 1s ease;
      }
      .header.visible {
  transform: translateY(0); /* Visible position */
}
      .logo-title {
        display: flex;
        padding-left: 25px;
        gap: 8px;
        cursor: pointer;
      }
      #p1 {
        color: #000;
        font-family: Average Sans;
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
        display: flex;

        padding: 30px 35px 0 0;
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
      }
      .mid-foot {
        display: flex;
      }

      .mid-left {
        width: 75%;
        display: flex;
        gap: 50px;
        color: #000;
        font-family: 'Inter';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 16.8px;
        padding-top: 75px;
        padding-left: 35px;
      }
      #list-features {
        width: 100%;
        height: auto;
        display: flex;
        gap:5px;
      }
      .mid-right {
        width: 25%;
        color: #000;
        font-family: 'Inter';
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 25.2px;

        padding-top: 75px;
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
        margin-left: 20px;
        cursor: pointer;
        position: relative;
        z-index: 0; 
      }
      /* .blur {
        filter: blur(5px); 
      } */
   


      @media (max-width: 640px) {
        .header {
          align-items: center;
          padding-right:10px;
        }
        .logo-title {
          width: 100%;
          padding-left: 10px;
        }
        .cart-count {
          border: 1px solid black;
          width: 15px;
          height: 15px;
          line-height: 15px;
          position: absolute;
          top: 0;
          right: 0;
          transform: translate(-65%, 50%);
          z-index: 1;
         }
        
       
        .right {
          align-items: center;
          padding-right:12px;
          padding-top: 5px;
          gap: 15px;
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
          flex-direction: column-reverse;
          padding-left: 25px;
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
          padding-left: 16px;
        }
        .mid-left {
          gap: 10px;
          width: 100%;
          padding-left: 5px;
        }
        .payment {
          margin-top: 0px;
        }
        #list-features {
          font-size: 14px;
        }
        .footer {
          background-color: #e9ecef;
        }
      }
    
    `,
  ],
})
export class HeaderAndFooterComponent {
  isCartOpen = false;


  cartCount: number = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
    });
  }

  openCart() {
    this.isCartOpen = true;
    
  }

  closeCart() {
    this.isCartOpen = false;
    
  }
  showHeader = false;

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    const scrollY = window.scrollY;
    
    // You can adjust this threshold value as needed
    if (scrollY > 100) {
      // Show the header after a brief delay (1 second)
      setTimeout(() => {
        this.showHeader = true;
      }, 1000);
    } else {
      this.showHeader = false;
    }
  }
}
