import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, RequiredValidator, Validators} from '@angular/forms';
import {validateAndRewriteCoreSymbol} from '@angular/compiler-cli/src/ngtsc/imports';
import {ProductsComponent} from '../products/products.component';
import {Product} from '../Data/Product';

@Component({
  selector: 'app-reactive-form-example',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.css']
})
export class ReactiveFormExampleComponent implements OnInit {

  product: Product;
  formGoup: FormGroup;

  constructor() {
    this.product = new Product();
    this.formGoup = new FormGroup({
      id: new FormControl(0, Validators.required),
      title: new FormControl('', [Validators.required, Validators.minLength(3)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      quantity: new FormControl(0, [Validators.required, Validators.min(0)]),
    });
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  add(): void {
    this.product.id = this.formGoup.get('id');
    this.product.price = this.formGoup.get('price').value;
    this.product.title = this.formGoup.get('title').value;
    this.product.quantity = this.formGoup.get('quantity').value;

    ProductsComponent.PRODUCTS2P.push(this.product);
  }
}
