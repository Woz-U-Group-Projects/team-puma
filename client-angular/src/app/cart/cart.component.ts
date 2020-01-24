import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CartService } from '../cart.service';
import { Dryfood } from '../models/dryfood';
import { Coldfood } from '../models/coldfood';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  @Input() items: Dryfood[]; or: Coldfood[];
  total: number;
  @Output() itemsDeleted: EventEmitter<number> = new EventEmitter();
  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.total = 0;
    this.items = [];
    this.items = this.cartService.getItems();
    this.items.forEach(element => {
      this.total += element.price;
    });
  }
  onClickDelete() {
    // add the following line:
    alert('Delete!');
    this.itemsDeleted.emit();
  }

}
