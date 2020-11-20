import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { FormProductComponent } from './form-product/form-product.component';
import { ReactiveFormExampleComponent } from './reactive-form-example/reactive-form-example.component';
import {RouterModule} from '@angular/router';
import { DetailProductComponent } from './detail-product/detail-product.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductsComponent,
    FormProductComponent,
    ReactiveFormExampleComponent,
    DetailProductComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'Products', component: ProductsComponent},
      {path: 'formProduct', component: FormProductComponent},
      {path: 'formReactive', component: ReactiveFormExampleComponent},
      {path: 'DetailProduct/:id', component: DetailProductComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
