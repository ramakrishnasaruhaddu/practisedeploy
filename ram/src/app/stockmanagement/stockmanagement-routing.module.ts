import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FullfillmentnodesetupComponent } from './fullfillmentnodesetup/fullfillmentnodesetup.component';
import { LocationmasterComponent } from './locationmaster/locationmaster.component';
import { PincodemasterComponent } from './pincodemaster/pincodemaster.component';
import { StockinstockoutComponent } from './stockinstockout/stockinstockout.component';
import { StockviewComponent } from './stockview/stockview.component';


const routes: Routes = [
  {path:'stockinstockout',component:StockinstockoutComponent},
  {path:'stockview',component:StockviewComponent},
  {path:'fullfillmentnodesetup',component:FullfillmentnodesetupComponent},
  {path:'locationmaster',component:LocationmasterComponent},
  {path:'pincodemaster',component:PincodemasterComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockmanagementRoutingModule { }
