import { Component, OnInit } from '@angular/core';
import { Dryfood } from '../models/dryfood';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-dry-foods',
  templateUrl: './dry-foods.component.html',
  styleUrls: ['./dry-foods.component.css']
})
export class DryFoodsComponent implements OnInit {
  public dryfoods: Dryfood[];
  private dryfoodsRoute = 'http://localhost:3000/dryfoods';
  constructor(private http: HttpClient) { }
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
