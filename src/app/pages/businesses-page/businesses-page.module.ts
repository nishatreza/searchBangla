import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessesPageComponent } from './businesses-page.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import { CategoryComponent } from './category/category.component';
import { BestBusinessComponent } from './best-business/best-business.component';
import { ReviewsOfPeopleComponent } from './reviews-of-people/reviews-of-people.component';
import { ReviewComponent } from './review/review.component';
import { PeopleReviewComponent } from './people-review/people-review.component';
import { HotAndNewBusinessComponent } from './hot-and-new-business/hot-and-new-business.component';
import { BusinessDetailHeaderComponent } from './business-detail-header/business-detail-header.component'
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { BusinessNavbarComponent } from './business-navbar/business-navbar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';



const routes: Routes = [
  
 
  {path:'', component: BusinessesPageComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    NgbModule,

    RouterModule.forChild(routes),
    CommonuiModule

  ],
  declarations: [BusinessesPageComponent, CategoryComponent, BestBusinessComponent, ReviewsOfPeopleComponent, ReviewComponent, PeopleReviewComponent, HotAndNewBusinessComponent, BusinessDetailHeaderComponent, BusinessNavbarComponent]
})
export class BusinessesPageModule { }
