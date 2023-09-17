import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductSectionComponent } from 'src/app/common-components/product-section/product-section.component';
import { CartService } from 'src/app/services/cart.service';
import { IProduct } from 'src/app/utils/interface';

@Component({
  selector: 'app-cartitem',
  templateUrl: 'cart-item.component.html',
  styleUrls: [`./cart-item.component.css`],
})
export class CartItemComponent {
  cartItems: Observable<any> | undefined;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartItems = this.cartService.getCartItems();

    console.log('received products to cartUI from cartSERVICE', this.cartItems);
  }

  incrementQuantity(product: IProduct) {
    this.cartService.incrementQuantityBy1(product.id);
    console.log(this.incrementQuantity);
  }

  decrementQuantity(product: IProduct) {
    this.cartService.decrementQuantityOrDeleteProductFromCart(product.id);
    console.log(this.decrementQuantity);
  }
}
