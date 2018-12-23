import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsDetailsComponent } from './news-details.component';
import { HotNewsComponent } from './hot-news/hot-news.component';

import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  
 
  {path:'', component: NewsDetailsComponent, pathMatch:'full'}
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
  declarations: [NewsDetailsComponent, HotNewsComponent]
})
export class NewsDetailsModule { }
