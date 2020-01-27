import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Dryfood } from '../../models/dryfood';
import { Coldfood } from '../../models/coldfood';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Dryfood[]; or: Coldfood[];
  total: number;
  quantity: number;
  totalquantity: number;
  constructor(private cartService: CartService) { }
  clearCart() {
    window.alert('Your Cold Food product has been cleared from the cart!');
    this.cartService.clearCart();
  }
  ngOnInit() {
    this.total = 0;
    this.totalquantity = 0;
    this.items = [];
    this.items = this.cartService.getItems();
    this.items.forEach(element => {
      this.quantity = 1;
      this.totalquantity += 1;
      this.total += element.price;
    });
  }

}
