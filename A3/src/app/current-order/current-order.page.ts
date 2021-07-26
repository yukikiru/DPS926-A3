import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-current-order',
  templateUrl: './current-order.page.html',
  styleUrls: ['./current-order.page.scss'],
})
export class CurrentOrderPage implements OnInit {

  constructor(private pizzaService: PizzaService, public alertController: AlertController, private router: Router) { }

  orderEmpty: boolean;
  orderPrice: number;
  orderQuantity: number;

  ngOnInit() {
    if(this.pizzaService.currentOrder.orderQuantity === 0){
      this.orderEmpty = true;
      this.orderQuantity = 0;
      this.orderPrice = 0;
    }
    else{
      this.orderEmpty = false;
      this.orderQuantity = this.pizzaService.currentOrder.orderQuantity;
      this.orderPrice = this.pizzaService.currentOrder.orderPrice;
    }
  }

  //Asks the user if they want to remove the pizza. If yes then removes the pizza from the order, otherwise ignores.
  async deletePizza(i){
    const delAlert = await this.alertController.create({
      subHeader: 'Success!',
      message: 'Pizza removed',
      buttons: ['OK']
    });

    const alert = await this.alertController.create({
      subHeader: 'Remove Pizza',
      message:  `Would you like to remove ${this.pizzaService.currentOrder.pizza[i].quantity} 
      ${this.pizzaService.currentOrder.pizza[i].size.name} ${this.pizzaService.currentOrder.pizza[i].topping.name} pizza(s) from the order?`,
      buttons: [
        {text:'Cancel'},
        {text:'Remove',
        handler: () => {
          this.pizzaService.removePizza(i);
          this.orderQuantity = this.pizzaService.currentOrder.orderQuantity;
          this.orderPrice = this.pizzaService.currentOrder.orderPrice;
          delAlert.present();
        }}]
    });
    await alert.present();
  }

  //Move the order to order histroy, then clear the current order.
  async checkout(){
    this.pizzaService.addHistory(this.pizzaService.currentOrder);
    const alert = await this.alertController.create({
      subHeader: 'Success!',
      message: 'Order placed. Thank you!',
      buttons: ['OK']
    });
    await alert.present().then(() => {this.router.navigate(['/'])});
  }

}
