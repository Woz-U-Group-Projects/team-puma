import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDisplayComponent } from './components/project-display/project-display.component';
import { HomeComponent } from './components/home/home.component';
import { DryFoodsComponent } from './components/dry-foods/dry-foods.component';
import { ColdFoodsComponent } from './components/cold-foods/cold-foods.component';
import { CartComponent } from './components/cart/cart.component';

@NgModule({
  declarations: [AppComponent, ProjectDisplayComponent, HomeComponent, DryFoodsComponent, ColdFoodsComponent, CartComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
