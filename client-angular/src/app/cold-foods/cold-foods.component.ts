import { Component, OnInit } from '@angular/core';
import { Coldfood } from '../models/coldfood';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cold-foods',
  templateUrl: './cold-foods.component.html',
  styleUrls: ['./cold-foods.component.css']
})
export class ColdFoodsComponent implements OnInit {
  public coldfoods: Coldfood[];
  private coldfoodsRoute = 'http://localhost:3000/coldfoods';

  constructor(private http: HttpClient, private route: ActivatedRoute, private cartService: CartService) { }
  addToCart(coldfoods) {
    window.alert('Your Cold Food product has been added to the cart!');
    this.cartService.addToCart(coldfoods);
  }
  getColdfood() {
    this.http.get<Coldfood[]>(this.coldfoodsRoute).subscribe(coldfoods => {
      this.coldfoods = coldfoods;
      console.log('Coldfood', this.coldfoods);
    });
}
  ngOnInit() {
    this.getColdfood();
  }

}
