import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import { NewsPageComponent } from './news-page.component';
import { Routes, RouterModule } from '@angular/router';
import { NewsNavbarComponent } from './news-navbar/news-navbar.component';
import { TopStoriesAndHotNewsComponent } from './top-stories-and-hot-news/top-stories-and-hot-news.component';
import { TopVideosComponent } from './top-videos/top-videos.component';
import { MissedInCaseComponent } from './missed-in-case/missed-in-case.component';
import { MostRatedComponent } from './most-rated/most-rated.component';
import { LazyLoadImageModule } from 'ng-lazyload-image';



const routes: Routes = [
  
 
  {path:'', component: NewsPageComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,
    LazyLoadImageModule,
    RouterModule.forChild(routes)

  ],
  declarations: [NewsPageComponent, NewsNavbarComponent, TopStoriesAndHotNewsComponent, TopVideosComponent, MissedInCaseComponent, MostRatedComponent]
})
export class NewsPageModule { }
