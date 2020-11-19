import { Component, OnInit } from '@angular/core';
import {Product} from '../Data/Product';
import {ProductsComponent} from '../products/products.component';

@Component({
  selector: 'app-form-product',
  templateUrl: './form-product.component.html',
  styleUrls: ['./form-product.component.css']
})
export class FormProductComponent implements OnInit {


  product: Product;

  constructor() {
    this.product = new Product();
  }

  ngOnInit(): void {
  }

  add(): void {
    ProductsComponent.PRODUCTS2P.push(this.product);
  }
}
