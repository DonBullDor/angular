import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import {Product} from '../Data/Product';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() prix: number;
  @Output() incrementEvent = new EventEmitter<Product>();
  @Output() incrementEvent2 = new EventEmitter<Product>();
  constructor() {
  }

  // @ts-ignore
  ngOnInit(): void {


  }



  buy(p: Product): void {
  }

  sendNotif(): void {
    this.incrementEvent.emit(this.product);
  }

  sendNotifbuy(): void {
    this.incrementEvent2.emit(this.product);
  }
}
