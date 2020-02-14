import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Dryfood } from '../../models/dryfood';
import { Coldfood } from '../../models/coldfood';
import { element } from 'protractor';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Dryfood[]; or: Coldfood[] = [];
  total: number;
  quantity: number;
  totalquantity: number;
  constructor(private cartService: CartService) { }
  clearCart() {
    window.alert('cleared from the cart!');
    this.items = [];
    this.items = [];
    this.total = 0;
    this.totalquantity = 0;
    this.items.forEach(element => {
      this.quantity = 0;
      this.totalquantity = 0;
      this.total += element.price = 0;
    });  
  }
  ngOnInit() {
    this.items = [];
    this.total = 0;
    this.totalquantity = 0;
    this.items = this.cartService.getItems();
    this.items.forEach(element => {
      this.quantity = 1;
      this.totalquantity += 1;
      this.total += element.price;
    });
  }
  deleteElement(items) {
    console.log(items);
    for (var i = 0; i < this.items.includes.length; i++) {
      if (this.items[i]["items"] == items) {
        this.items.splice(i, 1);
        this.totalquantity += -1;
      }
      
    }
  }
}
