import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockmanagementRoutingModule } from './stockmanagement-routing.module';
import { StockinstockoutComponent } from './stockinstockout/stockinstockout.component';
import { StockviewComponent } from './stockview/stockview.component';
import { FullfillmentnodesetupComponent } from './fullfillmentnodesetup/fullfillmentnodesetup.component';
import { LocationmasterComponent } from './locationmaster/locationmaster.component';
import { PincodemasterComponent } from './pincodemaster/pincodemaster.component';


@NgModule({
  declarations: [StockinstockoutComponent, StockviewComponent, FullfillmentnodesetupComponent, LocationmasterComponent, PincodemasterComponent],
  imports: [
    CommonModule,
    StockmanagementRoutingModule
  ]
})
export class StockmanagementModule { }
