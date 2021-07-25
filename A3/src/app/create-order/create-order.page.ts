import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  constructor() { }

  quantity: number;
  topping: string;
  size: string;

  toppingList = [{name: "Pepperoni", price: 0}, {name: "Veggies", price: 0}, {name: "Mushrooms", price: 0.5}, {name: "Chicken", price: 1.30}, {name: "Extra Cheese", price: 0.6}];
  sizeList = [{name: "Small", price: 8.99}, {name: "Medium", price: 11.99}, {name: "Large", price: 14.99}, {name: "X-Large", price: 19.99}, {name: "Party", price: 29.99}];

  ngOnInit() {
    this.quantity = 0;
    this.topping = "0";
    this.size = "0";
  }

  //Handles the click for the number pad, changing the value for the quantity
  numPressed(value){
    this.quantity = value;
  }

  //Clears all form data
  resetAll(){
    this.quantity = 0;
  }

}
