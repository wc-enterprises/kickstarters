import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [
    `
      .cart {
        background-color: #ffffff;
        color: black;
        width: 700px;
        height: 100vh;
        position: fixed;
        box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.5);
        transition: right 0.3s ease-in-out;
        right: -1px;
        z-index: 20;
        padding: 30px;
        box-sizing: border-box;
      }

      .fill-base {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }

      .header {
        width: 100%;
        height: 30px;
        display: flex;
        justify-content: space-between;
        padding-bottom: 20px;
      }

      .header::after {
        content: '';
        position: absolute;
        right: 0;
        top: 80px;
        width: 100%; /* Extend the width to 100% */
        height: 1px; /* Adjust the border thickness as needed */
        background-color: #e3e3e3;
      }

      .inner-head {
        display: flex;
      }

      .scrollable-container {
        height: 75%;
        overflow-y: auto;
        overflow-x: hidden;
      }

      .footer {
        width: 100%;
        height: auto;
      }

      .footer::before {
        content: '';
        position: absolute;
        right: 0;

        width: 100%; /* Extend the width to 100% */
        height: 1px; /* Adjust the border thickness as needed */
        background-color: #e3e3e3;
      }

      .btn-box {
        width: 100%;
        height: auto;
        display: flex;
        align-items: center;
        justify-content: center;
      }

      button {
        display: flex;
        width: 100%;
        padding: 16px 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        border-radius: 12px;
        background: #000;
        color: #fff;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px; /* 140% */
        cursor: pointer;
        border: none;
      }

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
    });

    this.cartService.finalPrice$.subscribe((price) => {
      this.finalPrice$ = price;
    });
  }
}