import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import {ProductRepository} from './product.repository';
import {OrderRepository} from './order.repository';

import {StaticDataSource} from './static.datasource';
import {RestDataSource} from './rest.datasource';

import {AuthService} from './auth.service';

import {Cart} from './cart.model';
import {Order} from './order.model';

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    ProductRepository,
    OrderRepository,
    Cart,
    Order,
    { provide: StaticDataSource, useClass: RestDataSource },
    RestDataSource,
    AuthService
  ],
})
export class ModelModule {
}
