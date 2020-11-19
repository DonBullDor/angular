import { Component, EventEmitter, Input, OnInit, Output, OnChanges, SimpleChanges } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnChanges {

  @Input() product:Product;
  @Output() liked = new EventEmitter<Product>();
  @Output() buyed = new EventEmitter<Product>();
  constructor() { }
  addLike(p: Product){
    this.liked.emit(p);
  }

  buy(){
    this.buyed.emit(this.product);
  }
  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges){

  }

}
