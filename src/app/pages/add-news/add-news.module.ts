import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddNewsComponent } from './add-news.component';
// import { AddNewsNavbarComponent } from './add-news-navbar/add-news-navbar.component';
import { AddNewsFormComponent } from './add-news-form/add-news-form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: AddNewsComponent, pathMatch:'full'}
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
  declarations: [AddNewsComponent, AddNewsFormComponent]
})
export class AddNewsModule { }
