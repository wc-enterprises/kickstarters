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
        transition: 0.5s;
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
        height:auto;
        display: flex;
        justify-content: space-between;
        padding-bottom: 15px;
     
      }

      .header::after {
        content: '';
        position: absolute;
        right: 0;
        top: 75px;
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
      ::-webkit-scrollbar {
  width: 0; /* Remove the scrollbar width */
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
#total-rate{
font-size:18px;
}
      @media (max-width: 640px) {
        .header{
          
          padding-top:10px;

        }
        .header::after {top:60px;}
        .cart {
          
          width: 100%;
          padding:5px;
        }
        #cancel {
          margin-right:12px;
          width:28px;
          height:28px;
        }
        #total-rate {
          margin-right: 25px;
          font-size:16px;
        }
        .header {
          padding-left: 5px;
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
