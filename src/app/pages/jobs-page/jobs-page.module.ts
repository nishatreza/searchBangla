import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsPageComponent } from './jobs-page.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
// import { JobsNavbarComponent } from './jobs-navbar/jobs-navbar.component';
import { JobsComponent } from './jobs/jobs.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { JobBenefitsComponent } from './job-benefits/job-benefits.component';

import { JobListingComponent } from './job-listing/job-listing.component';
import { JobsCategoryComponent } from './jobs-category/jobs-category.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JobsCareerCardsComponent } from './jobs-career-cards/jobs-career-cards.component';
import { JobsBecomeMemberComponent } from './jobs-become-member/jobs-become-member.component';
import { JobsFindBestpeopleComponent } from './jobs-find-bestpeople/jobs-find-bestpeople.component';


const routes: Routes = [
  
 
  {path:'', component: JobsPageComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    LazyLoadImageModule,
    NgbModule,

    RouterModule.forChild(routes)

  ],
  declarations: [JobsPageComponent, JobsComponent, JobBenefitsComponent, JobListingComponent, JobsCategoryComponent, JobsCareerCardsComponent, JobsBecomeMemberComponent, JobsFindBestpeopleComponent]
})
export class JobsPageModule { }
