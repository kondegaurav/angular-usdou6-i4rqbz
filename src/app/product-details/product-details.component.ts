import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  //Defining product property
  product;

  //Injecting ActivatedRoute and CartService into Constructor
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) { }

    ngOnInit() {
      //Subscribe to route params and fetch the product based on  the productId.
      this.route.paramMap.subscribe(params => {
      this.product = products[+params.get('productId')];
    });
  }

    addToCart(product) {
      window.alert('Your product has been added to cart');
      this.cartService.addToCart(product);
    }
}