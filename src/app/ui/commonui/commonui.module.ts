import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NavbarComponent} from '../../components/navbar/navbar.component'
import {ProfileNavComponent} from '../../components/profile-nav/profile-nav.component'
import {FooterComponent} from '../../components/footer/footer.component';
import {AddBusinessnavbarComponent} from '../../pages/add-business/add-businessnavbar/add-businessnavbar.component';
import {AddJobsNavbarComponent} from '../../pages/add-jobs/add-jobs-navbar/add-jobs-navbar.component';
import {JobsNavbarComponent} from '../../pages/jobs-page/jobs-navbar/jobs-navbar.component';

import {AddNewsNavbarComponent} from '../../pages/add-news/add-news-navbar/add-news-navbar.component';
import {LeftSideBarComponent} from '../../pages/profile-page/left-side-bar/left-side-bar.component';
import {TopSearchBarComponent} from '../../pages/profile-page/top-search-bar/top-search-bar.component';
import { ReplaceDashPipe } from '../../shared/pipes/replaceDash.pipe';
import { RatingComponent } from '../../pages/business-details/rating/rating.component';


import {Routes, RouterModule} from '@angular/router';
const UI = [
  FooterComponent,
  NavbarComponent,
  ProfileNavComponent,
  AddBusinessnavbarComponent,
  AddJobsNavbarComponent,
  JobsNavbarComponent,
  AddNewsNavbarComponent,
  LeftSideBarComponent,
  TopSearchBarComponent,
  RatingComponent,
  ReplaceDashPipe
]

@NgModule({
  imports: [
    CommonModule,

    RouterModule
  ],
  exports:[
    UI
    
  
  ],
  declarations: [UI]
})
export class CommonuiModule { }
