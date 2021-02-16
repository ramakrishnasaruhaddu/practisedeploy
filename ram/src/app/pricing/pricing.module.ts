import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingRoutingModule } from './pricing-routing.module';
import { PromotionreservationComponent } from './promotionreservation/promotionreservation.component';


@NgModule({
  declarations: [PromotionreservationComponent],
  imports: [
    CommonModule,
    PricingRoutingModule
  ]
})
export class PricingModule { }
