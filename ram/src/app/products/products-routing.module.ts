import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductcatalogComponent } from './productcatalog/productcatalog.component';
import { ProductmasterComponent } from './productmaster/productmaster.component';


const routes: Routes = [
  {path:'productcatalog',component:ProductcatalogComponent},
  {path:'productmaster',component:ProductmasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
