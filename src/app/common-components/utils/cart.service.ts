import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartQuantitySubject = new BehaviorSubject<number>(0);
  cartQuantity$ = this.cartQuantitySubject.asObservable();

  increaseCartQuantity() {
    this.cartQuantitySubject.next(this.cartQuantitySubject.value + 1);
  }
}