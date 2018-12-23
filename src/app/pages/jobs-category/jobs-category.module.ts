import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsCategoryComponent } from './jobs-category.component';
import { JobListItemComponent } from './job-list-item/job-list-item.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { JobsLeftSideBarComponent } from './jobs-left-side-bar/jobs-left-side-bar.component';
// import { ReplaceDashPipe } from '../../shared/pipes/replaceDash.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

const routes: Routes = [
  {path:'', component: JobsCategoryComponent, pathMatch:'full'}
]

@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    NgxPaginationModule,  
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    CommonuiModule
  ],
  declarations: [JobsCategoryComponent, JobListItemComponent, SearchBarComponent, JobsLeftSideBarComponent]
})
export class JobsCategoryModule { }
