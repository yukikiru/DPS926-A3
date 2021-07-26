import { Size } from "./size.model";
import { Topping } from "./topping.model";

export class Pizza{
    topping: Topping;
    size: Size;
    price: number;
    quantity: number;
}