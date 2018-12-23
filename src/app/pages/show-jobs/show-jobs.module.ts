import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowJobsComponent } from './show-jobs.component';
import { ShowJobsFormComponent } from './show-jobs-form/show-jobs-form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: ShowJobsComponent, pathMatch:'full'}
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
  declarations: [ShowJobsComponent, ShowJobsFormComponent]
})
export class ShowJobsModule { }
