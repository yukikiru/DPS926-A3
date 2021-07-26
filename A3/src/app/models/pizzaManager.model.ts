import { pizzaOrder } from "./pizzaOrder.model";

export class PizzaManager{
    orderCollection: pizzaOrder[];
    constructor(){
        this.orderCollection = new Array<pizzaOrder>();
    }
}