import { Injectable } from '@angular/core';
import { Size } from '../models/size.model';

@Injectable({
  providedIn: 'root'
})
export class SizeServiceService {

  constructor() { }

  private sizes: Size[] = [
    {name: "Small", price: 8.99}, 
    {name: "Medium", price: 11.99}, 
    {name: "Large", price: 14.99}, 
    {name: "X-Large", price: 19.99}, 
    {name: "Party", price: 29.99}
  ];

  getSizes(){
    return[...this.sizes];
  }
}
