import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminstrationRoutingModule } from './adminstration-routing.module';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { TagmasterComponent } from './tagmaster/tagmaster.component';
import { CommonmastersComponent } from './commonmasters/commonmasters.component';
import { BatchjobschedulerComponent } from './batchjobscheduler/batchjobscheduler.component';
import { CompanysetupComponent } from './companysetup/companysetup.component';
import { ReasonmasterComponent } from './reasonmaster/reasonmaster.component';
import { EmailserverconfigurationComponent } from './emailserverconfiguration/emailserverconfiguration.component';
import { EmailtemplateconfigurationComponent } from './emailtemplateconfiguration/emailtemplateconfiguration.component';


@NgModule({
  declarations: [UsermanagementComponent, TagmasterComponent, CommonmastersComponent, BatchjobschedulerComponent, CompanysetupComponent, ReasonmasterComponent, EmailserverconfigurationComponent, EmailtemplateconfigurationComponent],
  imports: [
    CommonModule,
    AdminstrationRoutingModule
  ]
})
export class AdminstrationModule { }
