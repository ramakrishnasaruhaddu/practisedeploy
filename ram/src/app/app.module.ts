import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidebaraccordinComponent } from './sidebaraccordin/sidebaraccordin.component';

import {  ConnectionModule }  from '../app/connection/connection.module';

import {  ProductsModule}  from '../app/products/products.module';

import { PricingModule }  from '../app/pricing/pricing.module';

import { StockmanagementModule }  from './stockmanagement/stockmanagement.module';
import { FooterComponent }  from '../app/footer/footer.component';
import { StockmanagementRoutingModule } from './stockmanagement/stockmanagement-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebaraccordinComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ConnectionModule,
    ProductsModule,
    PricingModule,
    StockmanagementRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
