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
  defaultFinalPrice: number=0;

  addToCart(product: IProduct) {
    // if (this.cartItems.length === 0) {
    //   // If the cart is empty, set the default final price to the selling price of the first product added
    //   this.defaultFinalPrice = parseInt(product.sellingPrice);
    // }
    // this.cartCountSubject.next(this.cartCountSubject.value + 1);
    // product.quantity = 1;
    // this.cartItems?.push(product);
    // console.log('item added to cart. Total cart: ', this.cartItems);
    const existingProduct = this.cartItems.find((cart) => cart.id === product.id);

  if (existingProduct) {
    // If the product with the same ID already exists in the cart, update its quantity
    existingProduct.quantity += 1;
  } else {
    // If it's a new product, add it to the cart
    product.quantity = 1;
    this.cartItems.push(product);
  }

 

 this.cartCountSubject.next(this.cartCountSubject.value + 1);
  console.log('Item added to cart. Total cart: ', this.cartItems);
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
      // If the quantity is greater than 1, just decrement the quantity
      this.cartItems[productIndex].quantity -= 1;
    } else {
      // If the quantity is 1, remove the product from the cart
      const deletedProduct = this.cartItems.splice(productIndex, 1)[0];
      // Subtract the selling price of the deleted product from the final price
      this.defaultFinalPrice -= parseInt(deletedProduct.sellingPrice);
    }

    // Calculate the total price of the remaining items
    const newFinalPrice = this.cartItems.reduce((total, item) => {
      return total + parseInt(item.sellingPrice) * item.quantity;
    }, 0);

    // Update the total price in the BehaviorSubject
    this.cartCountSubject.next(newFinalPrice);
  }
  }

  updateProductsInCart(product: any) {
    
  }

  getCartItems(): Observable<IProduct[]> {
    return of(this.cartItems);
  }

  calculateFinalPrice() {
    let finalPrice = this.defaultFinalPrice;

    this.cartItems.forEach((cart) => {
      finalPrice +=parseInt(cart.sellingPrice)*cart.quantity;
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
