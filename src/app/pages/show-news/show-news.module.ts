import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowNewsComponent } from './show-news.component';
import { ShowNewsFormComponent } from './show-news-form/show-news-form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: ShowNewsComponent, pathMatch:'full'}
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
  declarations: [ShowNewsComponent, ShowNewsFormComponent]
})
export class ShowNewsModule { }
