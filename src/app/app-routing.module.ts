import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AuthService} from './core/auth.service';
import { CoreModule } from './core/core.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';
// import { LoadingModule } from 'ngx-loading';
// auth guard firebase guard
import {AuthGuard as FirebaseGuard} from './core/auth.guard';


const appRouting: Routes = [
  { path: '', loadChildren: './pages/landing-page/landing-page.module#LandingPageModule'},
  { path: 'jobs', loadChildren: './pages/jobs-page/jobs-page.module#JobsPageModule'},
  { path: 'business', loadChildren: './pages/businesses-page/businesses-page.module#BusinessesPageModule'},
  { path: 'news', loadChildren: './pages/news-page/news-page.module#NewsPageModule'},
  { path: 'add-business', loadChildren: './pages/add-business/add-business.module#AddBusinessModule'},
  { path: 'add-jobs', loadChildren: './pages/add-jobs/add-jobs.module#AddJobsModule'},
  { path: 'add-news', loadChildren: './pages/add-news/add-news.module#AddNewsModule'},
  { path: 'update-business', loadChildren: './pages/update-business/update-business.module#UpdateBusinessModule'},
  { path: 'show-business', loadChildren: './pages/show-business/show-business.module#ShowBusinessModule'},
  { path: 'free-trial', loadChildren: './pages/free-trial/free-trial.module#FreeTrialModule'},
  { path: 'profile', loadChildren: './pages/profile-page/profile-page.module#ProfilePageModule', canActivate:[FirebaseGuard]},
  // { path: 'profile', loadChildren: './pages/profile-page/profile-page.module#ProfilePageModule', canActivate:[FirebaseGuard]},  
  { path: 'edit-profile', loadChildren: './pages/profile-form/profile-form.module#ProfileFormModule'},
  { path: 'profile-blog', loadChildren: './pages/profile-blog/profile-blog.module#ProfileBlogModule'},
  { path: 'profile-subscription', loadChildren: './pages/profile-subscription/profile-subscription.module#ProfileSubscriptionModule'},
  { path: 'business-review', loadChildren: './pages/business-review/business-review.module#BusinessReviewModule'},
  
  { path: 'update-jobs', loadChildren: './pages/update-jobs/update-jobs.module#UpdateJobsModule'},
  { path: 'update-news', loadChildren: './pages/update-news/update-news.module#UpdateNewsModule'},
  { path: 'show-jobs', loadChildren: './pages/show-jobs/show-jobs.module#ShowJobsModule'},
  { path: 'show-news', loadChildren: './pages/show-news/show-news.module#ShowNewsModule'},
  { path: 'business-details/:id', loadChildren: './pages/business-details/business-details.module#BusinessDetailsModule'},
  { path: 'job-details/:id', loadChildren: './pages/jobs-details/jobs-details.module#JobsDetailsModule'},
  // { path: 'jobs-details/:id', loadChildren: './pages/jobs-details/jobs-details.module#JobsDetailsModule', canActivate:[FirebaseGuard]},
  { path: 'job/apply/:id', loadChildren: './pages/job-apply/job-apply.module#JobApplyModule'},
  { path: 'sign-in', loadChildren: './pages/sign-in/sign-in.module#SignInModule'},

  { path: 'hot-news/:id', loadChildren: './pages/news-details/news-details.module#NewsDetailsModule'},
  { path: 'business/category/:link', loadChildren: './pages/business-category/business-category.module#BusinessCategoryModule'},
  { path: 'jobs/category/:link', loadChildren: './pages/jobs-category/jobs-category.module#JobsCategoryModule'},
  { path: 'business/category/restaurant/menu/:link', loadChildren: './pages/business-category-menu/business-category-menu.module#BusinessCategoryMenuModule'},
  // { path: 'add-restaurant-menu', loadChildren: './pages/add-restaurant-menu/add-restaurant-menu.module#AddRestaurantMenuModule'},
  { path: 'add-restaurant-menu/:businessid', loadChildren: './pages/add-restaurant-menu/add-restaurant-menu.module#AddRestaurantMenuModule'},
  { path: 'view-restaurant-menu/:businessid', loadChildren: './pages/view-restaurant-menu/view-restaurant-menu.module#ViewRestaurantMenuModule'},
];




@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    JwSocialButtonsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouting, {onSameUrlNavigation: 'reload'})],
  exports: [
    HttpClientModule,
    // for auth and core 
    CoreModule,
    NgbModule,

    FormsModule,
    ReactiveFormsModule,
    RouterModule],

    providers: [
      FirebaseGuard,

      AuthService
    ]

})
export class AppRoutingModule { }
