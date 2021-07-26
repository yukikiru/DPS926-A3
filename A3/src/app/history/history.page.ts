import { Component, OnInit } from '@angular/core';
import { PizzaService } from '../services/pizza.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

  orderEmpty: boolean;

  constructor(private pizzaService: PizzaService) { }

  ngOnInit() {
    if(this.pizzaService.history.orderCollection.length === 0){
      this.orderEmpty = true;
    }
    else{
      this.orderEmpty = false;
    }
  }



}
