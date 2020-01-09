import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Dryfood } from '../models/dryfood';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dry-foods',
  templateUrl: './dry-foods.component.html',
  styleUrls: ['./dry-foods.component.css']
})
export class DryFoodsComponent implements OnInit {
  public dryfoods: Dryfood[];
  private dryfoodsRoute = 'http://localhost:3000/dryfoods';
  constructor(private http: HttpClient,  private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(dryfoods) {
    window.alert('Your Dry Food product has been added to the cart!');
    this.cartService.addToCart(dryfoods);
  }
  getDryfood() {
    this.http.get<Dryfood[]>(this.dryfoodsRoute).subscribe(dryfoods => {
      this.dryfoods = dryfoods;
      console.log('Dryfood', this.dryfoods);
    });
  }
  ngOnInit() {
    this.getDryfood();
  }

}
