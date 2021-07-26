import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';
import { PizzaManager } from '../models/pizzaManager.model';
import { pizzaOrder } from '../models/pizzaOrder.model';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {
  history: PizzaManager;
  currentOrder: pizzaOrder;
  
  constructor() { 
    this.history = new PizzaManager();
    this.currentOrder = new pizzaOrder();
    // this.currentOrder.orderPrice = 0;
    // this.currentOrder.orderQuantity = 0;
  }

  //adds pizza to current order
  addPizza(pizza:Pizza){
    this.currentOrder.pizza.push(pizza);
    this.currentOrder.orderQuantity += pizza.quantity;
    this.currentOrder.orderPrice += pizza.price;
  }
  //removes pizza from current order
  removePizza(i){
    this.currentOrder.orderPrice -= this.currentOrder.pizza[i].price;
    this.currentOrder.orderQuantity -= this.currentOrder.pizza[i].quantity;
    this.currentOrder.pizza.splice(i,1);
  }

  clearCurrent(){
    this.currentOrder = new pizzaOrder();
  }

  addHistory(order: pizzaOrder){
    this.currentOrder.date = new Date();
    this.history.orderCollection.push(order);
    this.currentOrder = new pizzaOrder();
  }
}
