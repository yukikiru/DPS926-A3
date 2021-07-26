import { Pizza } from "./pizza.model";


export class pizzaOrder{
    pizza: Pizza[];
    orderPrice: number;
    orderQuantity: number;
    date: Date;

    constructor(){
        this.pizza = new Array<Pizza>();
        this.orderPrice = 0;
        this.orderQuantity = 0;
        this.date = new Date();
    }
}