import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateNewsComponent } from './update-news.component';
import { UpdateNewsFormComponent } from './update-news-form/update-news-form.component';
//new added @07/08/18 (pial)
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: UpdateNewsComponent, pathMatch:'full'}
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
  declarations: [UpdateNewsComponent, UpdateNewsFormComponent]
})
export class UpdateNewsModule { }
