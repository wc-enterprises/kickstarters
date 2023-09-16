import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  template: `<html>
    <body>
      <div *ngIf="isCartOpen" class="cart">
        <div class="header">
          <div class="inner-head">
            <img src="./assets/bag.svg" />
            <div
              id="items"
              style="color: #444;
  padding-top:2px;
  font-family: Inter;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;"
            >
              {{ cartCount }}&nbsp;items
            </div>
          </div>
          <ng-container>
            <img
              (click)="closeCart.emit()"
              id="cancel"
              style="padding:2px 45px 0 0; cursor: pointer;"
              src="./assets/xcircle.svg"
            />
          </ng-container>
        </div>
        <div style="height:70vh;  overflow-y: auto; overflow-x:hidden;">
          <app-cartitem></app-cartitem>
        </div>
        <div class="footer">
          <div
            style="display:flex; flex-direction:row;justify-content:space-between;"
          >
            <p
              style="padding-left:3vw; color: var(--netural-grey-500, #667085);
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;"
            >
              Order Total
            </p>
            <span
              id="total-rate"
              style="padding-top:25px; padding-right:55px;  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 600;
  line-height: 21px;
  "
              >£{{ finalPrice$ | async }}</span
            >
          </div>
          <button routerLink="payments">Proceed to Checkout</button>
        </div>
      </div>
    </body>
  </html>`,
  styles: [
    `
      .cart {
        background-color: #ffffff;
        color: black;
        width: 30vw;
        height: 100vh;
        position: fixed;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.5);
        transition: right 0.3s ease-in-out;
        right: -30px;
        z-index: 20;
      }
      .header {
        width: auto;
        height: 8vh;
        display: flex;
        justify-content: space-between;
        padding: 8px 0 0 5px;
        align-items: center;

        border-bottom: 1px solid #e3e3e3;
      }
      .inner-head {
        display: flex;
        width: 5vw;
        gap: 10px;
      }
      button {
        display: flex;
        width: 25vw;
        padding: 16px 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 12px;
        background: #000;
        margin-left: 2vw;
        color: #fff;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px; /* 140% */
        cursor: pointer;
        border: none;
      }
      .footer {
        width: auto;
        padding-bottom: 30px;
      }
      // mobile screen
      @media (max-width: 640px) {
        .cart {
          right: -25px;
          width: 100%;
        }
        #cancel {
          margin-right: -10px;
        }
        #total-rate {
          margin-right: -18px;
        }
        .header {
          padding-left: 5px;
        }
        button {
          width: 90vw;
        }
        #items {
          padding-left: 8px;
        }
      }
    `,
  ],
})
export class CartComponent {
  @Input() isCartOpen: boolean = false;
  @Output() closeCart: EventEmitter<void> = new EventEmitter<void>();
  cartCount!: number;
  finalPrice$: any;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    
    this.cartService.cartCount$.subscribe((count) => {
      this.cartCount = count;
      this.calculateFinalPrice();
    });
    
  }
  calculateFinalPrice() {
    this.finalPrice$ = this.cartService.calculateFinalPrice();
  }
  
  
}
