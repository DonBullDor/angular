import {Component, OnInit} from '@angular/core';
import {Product} from '../Data/Product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  constructor() {
    this.PRODUCTS = ProductsComponent.PRODUCTS2P;
  }
  static PRODUCTS2P: Product[] = [

    {id: 1, title: 'T-shirt 1', price: 18, quantity: 0, like: 0},
    {id: 2, title: 'T-shirt 2', price: 21, quantity: 10, like: 0},
    {id: 3, title: 'T-shirt 3', price: 16, quantity: 8, like: 0}
  ];

  prix: number;
  PRODUCTS: Product[] ;

  ngOnInit(): void {
    this.prix = 0;
  }

  Addlike(product): void {
    product.like++;
  }

  buy(p: Product): void {
    p.quantity--;
  }

  incrementLike(product: Product): void {
    const i = this.PRODUCTS.indexOf(product);
    this.PRODUCTS[i].like++;
  }

  disincrementBuy(product: Product): void {
    const i = this.PRODUCTS.indexOf(product);
    this.PRODUCTS[i].quantity--;
  }
}
