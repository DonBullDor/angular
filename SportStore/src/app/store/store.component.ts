import {Component} from '@angular/core';
import {Product} from '../model/product.model';
import {ProductRepository} from '../model/product.repository';
import {Cart} from '../model/cart.model';
import {Router} from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'store',
  templateUrl: 'store.component.html'
})
export class StoreComponent {
  constructor(private repository: ProductRepository,
              private cart: Cart,
              private router: Router) {
  }

  public selectedCategory = null;
  public productsPerPage = 4;
  public selectedPage = 1;

  get products(): Product[] {
    const pageIndex = (this.selectedPage - 1) * this.productsPerPage;
    return this.repository.getProducts(this.selectedCategory)
      .slice(pageIndex, pageIndex + this.productsPerPage);
  }

  // tslint:disable-next-line:typedef
  changePage(newPage: number) {
    this.selectedPage = newPage;
  }

  // tslint:disable-next-line:typedef
  changePageSize(newSize: number) {
    this.productsPerPage = Number(newSize);
    this.changePage(1);
  }

  /*get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage))
      .fill(0).map((x, i) => i + 1);
  }*/

  get pageCount(): number {
    return Math.ceil(this.repository
      .getProducts(this.selectedCategory).length / this.productsPerPage);
  }

  // tslint:disable-next-line:typedef
  changeCategory(newCategory?: string) {
    this.selectedCategory = newCategory;
  }

  get categories(): string[] {
    return this.repository.getCategories();
  }

  // tslint:disable-next-line:typedef
  addProductToCart(product: Product) {
    this.cart.addLine(product);
    this.router.navigateByUrl('/cart');
  }
}
