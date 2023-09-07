// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, from, of } from 'rxjs';
import { IProduct } from '../utils/interface';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  cartItems: IProduct[] = [];

  private cartSubject = new BehaviorSubject<boolean>(false);
  cartState = this.cartSubject.asObservable();

  addToCart(product: IProduct) {
    this.cartCountSubject.next(this.cartCountSubject.value + 1);
    product.quantity = 1;
    this.cartItems?.push(product);
    console.log('item added to cart. Total cart: ', this.cartItems);
  }

  incrementQuantityBy1(productId: string ){
    const productIndex = this.cartItems.findIndex((cart) => cart.id === productId);

    if (productIndex !== -1) {
      this.cartItems[productIndex].quantity += 1;
    }
    
  }

  decrementQuantityOrDeleteProductFromCart(productId: string){
    const productIndex = this.cartItems.findIndex((cart) => cart.id === productId);

    if (productIndex !== -1) {
      if (this.cartItems[productIndex].quantity > 1) {
        
        this.cartItems[productIndex].quantity -= 1;
      } else {
        
        this.cartItems.splice(productIndex, 1);
      }
    }
  }

  updateProductsInCart(product: any) {
    
  }

  getCartItems(): Observable<IProduct[]> {
    return of(this.cartItems);
  }

  calculateFinalPrice() {
    let finalPrice = 0;

    this.cartItems.forEach((item) => {
      finalPrice += parseInt(item.sellingPrice);
    });
    return of(finalPrice);
  }
  

  openCart() {
    this.cartSubject.next(true);
  }

  closeCart() {
    this.cartSubject.next(false);
  }
}
