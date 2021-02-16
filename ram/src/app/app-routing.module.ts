import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
   {path:'',redirectTo:'connection',pathMatch:'full'},
  {path:'connection',loadChildren:()=>import(`../app/connection/connection.module`).then(m=>m.ConnectionModule)},
  {path:'ordermanagement',loadChildren:()=>import(`../app/ordermanagement/ordermanagement.module`).then(m=>m.OrdermanagementModule)},
  {path:'products',loadChildren:()=>import(`../app/products/products.module`).then(m=>m.ProductsModule)},
  {path:'pricing',loadChildren:()=>import(`../app/pricing/pricing.module`).then(m=>m.PricingModule)},
  {path:'stockmanagement',loadChildren:()=>import(`../app/stockmanagement/stockmanagement.module`).then(m=>m.StockmanagementModule)},
   {path:'adminstration',loadChildren:()=>import(`../app/adminstration/adminstration.module`).then(m=>m.AdminstrationModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
