import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})

export class CartService {
  items = [];

  //Method to add the item to the cart
  addToCart(product){
    this.items.push(product);
  };
  
  //Get all the items which in the cart
  getItems() {
    return this.items;
  }

  //Clear a cart
  clearCart(){
    this.items = [];
    return this.items;
  }

  //Get shipping prices
  getShippingPrices(){
    return this.http.get('/assets/shipping.json');
  }

  constructor(
    //Injecting HttpClient into cart service componenet
    private http: HttpClient,
  ) { }

}