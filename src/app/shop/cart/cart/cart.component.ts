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
    });

    this.cartService.finalPrice$.subscribe((price) => {
      this.finalPrice$ = price;
    });
  }
}
