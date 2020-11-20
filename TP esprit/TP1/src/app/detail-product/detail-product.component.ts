import {Component, OnInit} from '@angular/core';
import {Product} from '../Data/Product';
import {ActivatedRoute} from '@angular/router';
import {ProductsComponent} from '../products/products.component';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  Products: Product[];
  product: Product;

  constructor(private activatedRoute: ActivatedRoute) {
    this.product = new Product();
    this.Products = ProductsComponent.PRODUCTS2P;
    this.product = this.Products.filter(p => p.id === Number(this.activatedRoute.snapshot.paramMap.get('id')))[0];
  }

  ngOnInit(): void {
  }

}
