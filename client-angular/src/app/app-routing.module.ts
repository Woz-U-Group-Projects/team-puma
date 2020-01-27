import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DryFoodsComponent } from './components/dry-foods/dry-foods.component';
import { ColdFoodsComponent } from './components/cold-foods/cold-foods.component';
import { CartComponent } from './components/cart/cart.component';


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
