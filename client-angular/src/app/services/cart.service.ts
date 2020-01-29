import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
 
  addToCart(cart) {
    this.items.push(cart);
  }

  getItems() {
    return this.items;
  }
  clearCart() {
    return this.items
  }
}
