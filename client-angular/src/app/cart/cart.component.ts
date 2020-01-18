import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { Dryfood } from '../models/dryfood';
import { Coldfood } from '../models/coldfood';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items: Dryfood[]; or: Coldfood[];
  total: number;
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.total = 0;
    this.items = this.cartService.getItems();
    this.items.forEach(element => {
      this.total += element.price;
    });
  }

}
