import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductSectionComponent } from 'src/app/common-components/product-section/product-section.component';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/utils/interface';

@Component({
  selector: 'app-cartitem',
  templateUrl: 'cart-item.component.html',
  styles: [
    `
      #img {
        width: 100px;
        height: auto;
      }
      #title{
        width:120px;
      }
      .cartitem {
        width:auto;
        display: flex;
        gap: 15px;
        padding: 40px 0 0 55px;
      }
      #rate {
        margin-left: 40px;
      }
      .box1 {
        width: auto;
        display: flex;
        gap: 50px;
        color: #000;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 600;
        line-height: 21px; /* 140% */
      }
      .quantity-selector {
        display: flex;
        align-items: center;
        margin: -8px -5px 0 0;
      }
      .increment-button,
      .decrement-button,
      .delete-basket-icon,
      .quantity-number {
        width: 35px;
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #ccc;
        cursor: pointer;
      }

      //   mobile screen media query
      @media (max-width: 640px) {
        #img {
          width: 100px;
          height: auto;
        }
        #title {
          font-size: 12px;
         
            width:70px;
          
        }
        #rate {
          font-size: 12px;
          margin-left: 5px;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          margin: -10px -5px 0 0;
        }
        .increment-button,
        .decrement-button,
        .delete-basket-icon,
        .quantity-number {
          width: 28px;
          height: 28px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 1px solid #ccc;
          cursor: pointer;
        }

        .cartitem {
          padding: 40px 0 0 15px;
        }
      }
      @media (max-width: 426px) {
        .cartitem{padding: 40px 0 0 50px;
      }
      }
      @media (max-width: 375px){
        .cartitem{padding: 40px 0 0 15px;}
      }
    `,
  ],
})
export class CartItemComponent {
  cartItems: Observable<any> | undefined;



  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();
    
    console.log('received products to cartUI from cartSERVICE', this.cartItems);
    
  }

  // decrementQuantity() {
  //   if (this.quantity > 1) {
  //     this.quantity--;
  //   }
  // }

  // incrementQuantity() {
  //   this.quantity++;
  // }
  incrementQuantity(product: IProduct) {
    this.cartService.incrementQuantityBy1(product.id);
  console.log(this.incrementQuantity);
  }

  decrementQuantity(product: IProduct) {
    this.cartService.decrementQuantityOrDeleteProductFromCart(product.id);
    console.log(this.decrementQuantity);
   }

  // deleteItem() { 
  //   // Implement your delete logic here
  //   console.log('Item deleted');
  // } 
}
   