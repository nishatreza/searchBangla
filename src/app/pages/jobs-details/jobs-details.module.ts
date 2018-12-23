import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsDetailsComponent } from './jobs-details.component';

import { JobCareerComponent } from './job-career/job-career.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PeopleViewJobsComponent } from './people-view-jobs/people-view-jobs.component';
import { EmployerComponent } from './employer/employer.component';
import { JobDescriptionComponent } from './job-description/job-description.component';
import { SkillSetComponent } from './skill-set/skill-set.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FileSizePipe } from '../../shared/pipes/file-size.pipe';
import { SimilarAndPeopleviewJobsComponent } from './similar-and-peopleview-jobs/similar-and-peopleview-jobs.component';
import { SimilarJobsComponent } from './similar-jobs/similar-jobs.component';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatProgressBarModule} from '@angular/material';

const routes: Routes = [
  
 
  {path:'', component: JobsDetailsComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule,
    JwSocialButtonsModule,
    // BrowserAnimationsModule,
    // MatProgressBarModule,
    CommonuiModule
  ],
  declarations: [FileSizePipe, JobsDetailsComponent, JobCareerComponent, PeopleViewJobsComponent, EmployerComponent, JobDescriptionComponent, SkillSetComponent, AboutUsComponent, SimilarAndPeopleviewJobsComponent, SimilarJobsComponent]
})
export class JobsDetailsModule { }
