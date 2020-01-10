import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CartService {

  items = [];
  constructor(
    private http: HttpClient
  ) { }

  addToCart(cart) {
    this.items.push(cart);
  }

  getItems() {
    return this.items;
  }
  clearCart() {
    this.items = [];
    return this.items;
  }
}
