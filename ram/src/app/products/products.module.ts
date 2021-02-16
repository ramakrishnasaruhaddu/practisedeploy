import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductcatalogComponent } from './productcatalog/productcatalog.component';
import { ProductmasterComponent } from './productmaster/productmaster.component';


@NgModule({
  declarations: [ProductcatalogComponent, ProductmasterComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
