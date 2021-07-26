import { Injectable } from '@angular/core';
import { Topping } from '../models/topping.model';

@Injectable({
  providedIn: 'root'
})
export class ToppingServiceService {

  constructor() { }

  private toppings: Topping[]=
   [
     {name: "Pepperoni", price: 0}, 
     {name: "Veggies", price: 0}, 
     {name: "Mushrooms", price: 0.5}, 
     {name: "Chicken", price: 1.30}, 
     {name: "Extra Cheese", price: 0.6}
    ];

    getToppings(){
      return[...this.toppings];
    }
}
