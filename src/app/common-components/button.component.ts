import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../services/cart.service';
import { parseProductForCart } from '../utils/util';
@Component({
  selector: 'app-button',
  template: `<html>
    <body>
      <!-- <button>Add to cart</button> -->
      <div>
        <button
          (click)="addToCart()"
          [disabled]="isAddedToCart"
          [ngClass]="{ 'added-to-cart': isAddedToCart }"
        >
          {{ isAddedToCart ? 'Added to Cart!' : 'Add to Cart' }}
        </button>
      </div>
    </body>
  </html>`,
  styles: [
    `
      button {
        border: none;
        width: 100%;
        color: #fff;
        font-family: 'Inter';
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
      
        display: flex;
        cursor: pointer;
        padding: 10px;
        justify-content: center;
        align-items: center;
        gap: 10px;
        align-self: stretch;
        border-radius: 12px;
        background: #000;
      }
      button.added-to-cart {
        background-color: #e2e2e2;
        border: 3px solid var(--dark-dark-1, #b2bcca);
        color: #000000;
      }
      .added-message {
        position: absolute;
        top: 0;
        left: 0;
        background-color: green;
        color: white;
        padding: 5px;
        border-radius: 5px;
      }
      //  mobile screen
      @media (max-width: 640px) {
        button {
          border-radius: 12px;
          padding: 5px;
          font-size: 12px;
        }
      }
    `,
  ],
})
export class ButtonComponent {
  @Input() product: any;

  constructor(private cartService: CartService) {}
  isCartOpen = false;

  openCart() {
    this.isCartOpen = !this.isCartOpen;
  }
  isAddedToCart: boolean = false;
  displayDuration: number = 2000;

  addToCart() {
    this.isAddedToCart = true;
    this.cartService.addToCart(parseProductForCart(this.product));
    setTimeout(() => {
      this.isAddedToCart = false;
    }, this.displayDuration);
  }
  @Output() addToCartClicked = new EventEmitter<void>();
}
