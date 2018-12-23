import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ApptronFeaturesComponent } from './components/apptron-features/apptron-features.component';

import { HotAndNewBusinessComponent } from './components/hot-and-new-business/hot-and-new-business.component';
import { ReviewComponent } from './components/review/review.component';
import { CategoryComponent } from './components/category/category.component';
import { PeopleReviewComponent } from './components/people-review/people-review.component';
import { ReviewsOfPeopleComponent } from './components/reviews-of-people/reviews-of-people.component';
import { BusinessDetailHeaderComponent } from './components/business-detail-header/business-detail-header.component';
import { BestBusinessComponent } from './components/best-business/best-business.component';

import {RouterModule, Routes} from '@angular/router'
// map
import { NguiMapModule} from '@ngui/map';
import { AgmCoreModule} from '@agm/core';
// import social buttons module
import { JwSocialButtonsModule } from 'jw-angular-social-buttons';

import { environment } from '../environments/environment';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { ProfileNavComponent } from './components/profile-nav/profile-nav.component';
// for pipe
// import { PipeModule }    from './tools/PipeModule';

@NgModule({
  declarations: [
    AppComponent,
    
    ApptronFeaturesComponent,
  
    HotAndNewBusinessComponent,
    ReviewComponent,
    CategoryComponent,
    PeopleReviewComponent,
    ReviewsOfPeopleComponent,
    BusinessDetailHeaderComponent,
    
    BestBusinessComponent
  
  ],
  imports: [
    BrowserModule,
    LazyLoadImageModule,
    JwSocialButtonsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'searchbangla'),
    AgmCoreModule.forRoot({
      apiKey:'AIzaSyCx73BCxCr59jWPuAjtktsc4NJRGt-tRMQ'
    }),
    // NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=MY_GOOGLE_API_KEY'}),
    AppRoutingModule,
    AngularFireStorageModule,
    AngularFireAuthModule, 
    AngularFirestoreModule
  ],
  exports: [
    LazyLoadImageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
