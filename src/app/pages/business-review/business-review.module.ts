import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessReviewComponent } from './business-review.component';
import { BusinessReviewFormComponent } from './business-review-form/business-review-form.component';

import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: BusinessReviewComponent, pathMatch:'full'}
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
  declarations: [BusinessReviewComponent, BusinessReviewFormComponent]
})
export class BusinessReviewModule { }
