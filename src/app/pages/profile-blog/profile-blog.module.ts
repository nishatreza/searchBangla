import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileBlogComponent } from './profile-blog.component';
import { BlogCardsComponent } from './blog-cards/blog-cards.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BlogMainBodyComponent } from './blog-main-body/blog-main-body.component';


const routes: Routes = [
  {path:'', component: ProfileBlogComponent, pathMatch:'full'}
]

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonuiModule,
    NgbModule,
  ],
  declarations: [ProfileBlogComponent, BlogCardsComponent, BlogMainBodyComponent]
})
export class ProfileBlogModule { }
