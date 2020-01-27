import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../../models/home';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public home: Home[];
  private homeRoute = 'http://localhost:3000/home';
  constructor(private http: HttpClient) { }
  getHome() {
    this.http.get<Home[]>(this.homeRoute).subscribe(home => {
      this.home = home;
      console.log('Home', this.home);
    });
  }
  ngOnInit() {
    this.getHome();
  }

}
