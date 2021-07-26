import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Pizza } from '../models/pizza.model';
import { Size } from '../models/size.model';
import { Topping } from '../models/topping.model';
import { PizzaService } from '../services/pizza.service';
import { SizeServiceService } from '../services/size-service.service';
import { ToppingServiceService } from '../services/topping-service.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.page.html',
  styleUrls: ['./create-order.page.scss'],
})
export class CreateOrderPage implements OnInit {

  constructor(private pizzaService: PizzaService, private sizeService: SizeServiceService, 
    private toppingService: ToppingServiceService, public alertController: AlertController) { }

  quantity: number;
  selectedTopping: Topping;
  selectedSize: Size;

  toppingList: Topping[];
  sizeList: Size[];
  
  //Set Default values for page and get all toppings/sizes
  ngOnInit() {
    this.quantity = 0;
    this.selectedTopping = new Topping();
    this.selectedSize = new Size();
    this.selectedSize.name = "0";
    this.selectedTopping.name = "0";
    this.toppingList = this.toppingService.getToppings();
    this.sizeList = this.sizeService.getSizes();
  }

  //Handles the click for the number pad, changing the value for the quantity
  numPressed(value){
    this.quantity = value;
  }

  //Clears all form data
  resetAll(){
    this.quantity = 0;
    this.selectedTopping = new Topping();
    this.selectedSize = new Size();
    this.selectedSize.name = "0";
    this.selectedTopping.name = "0";
  }

  //When topping is selected, sets value for topping
  toppingSelected(tp){
    this.selectedTopping = tp;
  }

  sizeSelected(sz){
    this.selectedSize = sz;
  }

  //Checks if all fields are valid then adds to current order and resets the form;
  async addToOrder(){
    //Do checks for this button press

    if(this.selectedTopping.name === "0" || this.selectedSize.name === "0"){
      const alert = await this.alertController.create({
        subHeader: 'Warning',
        message:  'Please select both a topping and a size',
        buttons: ['OK']
      });
      await alert.present();
    }
    else if(this.quantity <= 0){
      const alert = await this.alertController.create({
        subHeader: 'Warning',
        message:  'Please choose a quantity greater than 0',
        buttons: ['OK']
      });
      await alert.present();
    }
    else{
      let pizza = new Pizza();
      pizza.topping = this.selectedTopping;
      pizza.size = this.selectedSize;
      pizza.price = (this.selectedSize.price + this.selectedTopping.price) * this.quantity;
      pizza.quantity = this.quantity;
      this.pizzaService.addPizza(pizza);
      this.resetAll();
      const alert = await this.alertController.create({
        subHeader: 'Success!',
        message:  `Your order now has ${this.pizzaService.currentOrder.orderQuantity} pizzas. Your total is ${this.pizzaService.currentOrder.orderPrice}.`,
        buttons: ['OK']
      });
      await alert.present();
    }

  }

}
