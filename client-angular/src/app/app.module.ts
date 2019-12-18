import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProjectDisplayComponent } from './project-display/project-display.component';
import { HomeComponent } from './home/home.component';
import { DryFoodsComponent } from './dry-foods/dry-foods.component';
import { ColdFoodsComponent } from './cold-foods/cold-foods.component';

@NgModule({
  declarations: [AppComponent, ProjectDisplayComponent, HomeComponent, DryFoodsComponent, ColdFoodsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
