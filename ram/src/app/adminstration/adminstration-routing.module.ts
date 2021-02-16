import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BatchjobschedulerComponent } from './batchjobscheduler/batchjobscheduler.component';
import { CommonmastersComponent } from './commonmasters/commonmasters.component';
import { CompanysetupComponent } from './companysetup/companysetup.component';
import { EmailserverconfigurationComponent } from './emailserverconfiguration/emailserverconfiguration.component';
import { EmailtemplateconfigurationComponent } from './emailtemplateconfiguration/emailtemplateconfiguration.component';
import { ReasonmasterComponent } from './reasonmaster/reasonmaster.component';
import { TagmasterComponent } from './tagmaster/tagmaster.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';


const routes: Routes = [

  {path:'usermanagement',component:UsermanagementComponent},
  {path:'tagmaster',component:TagmasterComponent},
  {path:'commonmaster',component:CommonmastersComponent},
  {path:'batchjobschedule',component:BatchjobschedulerComponent},
  {path:'companysetup',component:CompanysetupComponent},
  {path:'reasonmaster',component:ReasonmasterComponent},
  {path:'emailserverconfiguration',component:EmailserverconfigurationComponent},
  {path:'emailtemplateconfiguratioon',component:EmailtemplateconfigurationComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminstrationRoutingModule { }
