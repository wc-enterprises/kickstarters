// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { IProduct, IProductForCart } from '../utils/interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  checkCODAvailability(postalCode: string) {
      throw new Error('Method not implemented.');
  }
  checkDeliveryAvailability(postalCode: string) {
      throw new Error('Method not implemented.');
  }
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  private finalPriceSubject = new BehaviorSubject<number>(0);
  finalPrice$ = this.finalPriceSubject.asObservable();

  cartItems: IProductForCart[] = [];

  private cartSubject = new BehaviorSubject<boolean>(false);
  cartState = this.cartSubject.asObservable();
  defaultFinalPrice: number = 0;

  addToCart(product: IProductForCart) {
    const existingProduct = this.cartItems.find(
      (cart) => cart.id === product.id
    );

    if (existingProduct) {
      // If the product with the same ID already exists in the cart, update its quantity
      existingProduct.quantity += 1;
    } else {
      // If it's a new product, add it to the cart
      product.quantity = 1;
      this.cartItems.push(product);
    }

    this.cartCountSubject.next(this.cartCountSubject.value + 1);
    this.finalPriceSubject.next(this.calculateFinalPrice());
    console.log('Item added to cart. Total cart: ', this.cartItems);
  }

  incrementQuantityBy1(productId: string) {
    const productIndex = this.cartItems.findIndex(
      (cart) => cart.id === productId
    );

    if (productIndex !== -1) {
      this.cartItems[productIndex].quantity += 1;
    }
    this.cartCountSubject.next(this.cartCountSubject.value + 1);

    const finalPrice = this.calculateFinalPrice();
    this.finalPriceSubject.next(finalPrice);
  }

  decrementQuantityOrDeleteProductFromCart(productId: string) {
    const productIndex = this.cartItems.findIndex(
      (cart) => cart.id === productId
    );

    if (productIndex !== -1) {
      if (this.cartItems[productIndex].quantity > 1) {
        // If the quantity is greater than 1, just decrement the quantity
        this.cartItems[productIndex].quantity -= 1;
      } else {
        // If the quantity is 1, remove the product from the cart
        this.cartItems.splice(productIndex, 1)[0];
      }
      this.cartCountSubject.next(this.cartCountSubject.value - 1);

      // Calculate the total price of the remaining items
      this.finalPriceSubject.next(this.calculateFinalPrice());
    }
  }

  updateProductsInCart(product: any) {}

  getCartItems(): Observable<IProductForCart[]> {
    return of(this.cartItems);
  }

  calculateFinalPrice() {
    let finalPrice = this.defaultFinalPrice;

    this.cartItems.forEach((cart) => {
      finalPrice += parseInt(cart.sellingPrice) * cart.quantity;
    });

    return finalPrice;
  }

  openCart() {
    this.cartSubject.next(true);
  }

  closeCart() {
    this.cartSubject.next(false);
  }
  
}
