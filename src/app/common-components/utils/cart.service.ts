// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartCountSubject = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCountSubject.asObservable();

  addToCart() {
    this.cartCountSubject.next(this.cartCountSubject.value + 1);
    
  }
  private cartSubject = new BehaviorSubject<boolean>(false);
  cartState = this.cartSubject.asObservable();

  openCart() {
    this.cartSubject.next(true);
  }

  closeCart() {
    this.cartSubject.next(false);
  }
  
}
