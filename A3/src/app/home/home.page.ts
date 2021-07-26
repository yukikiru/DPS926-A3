import { Component } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private pizzaService: PizzaService) {}

  makeNew(){
    this.pizzaService.clearCurrent();
  }
}
