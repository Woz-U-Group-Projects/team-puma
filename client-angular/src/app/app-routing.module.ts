import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DryFoodsComponent } from './dry-foods/dry-foods.component';
import { ColdFoodsComponent } from './cold-foods/cold-foods.component';
import { CartComponent } from './cart/cart.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'dry-foods',
    component: DryFoodsComponent
  },
  {
    path: 'cold-foods',
    component: ColdFoodsComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
