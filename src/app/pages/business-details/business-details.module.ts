import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessDetailsComponent } from './business-details.component';
import { BusinessDetailsHeaderComponent } from './business-details-header/business-details-header.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonuiModule } from '../../ui/commonui/commonui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReviewComponent } from './review/review.component';
import { PeopleReviewComponent } from './people-review/people-review.component';
import { ReviewDetailsComponent } from './review-details/review-details.component';
import { BusinessAdvertisementComponent } from './business-advertisement/business-advertisement.component';
import { RatingModalComponent } from './rating-modal/rating-modal.component';
import { AddPhotosModalComponent } from './add-photos-modal/add-photos-modal.component';
import { ImageGalleryComponent } from './image-gallery/image-gallery.component';
import { ReviewsOfPeopleComponent } from './reviews-of-people/reviews-of-people.component';
import { StarReviewComponent } from './star-review/star-review.component';


const routes: Routes = [
  { path: '', component: BusinessDetailsComponent, pathMatch: 'full' }
]

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonuiModule
  ],
  declarations: [StarReviewComponent, ReviewsOfPeopleComponent, BusinessDetailsComponent, BusinessDetailsHeaderComponent, ReviewComponent, PeopleReviewComponent, ReviewDetailsComponent, BusinessAdvertisementComponent, RatingModalComponent, AddPhotosModalComponent, ImageGalleryComponent]
})
export class BusinessDetailsModule { }
