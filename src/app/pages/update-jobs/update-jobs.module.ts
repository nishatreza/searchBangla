import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateJobsComponent } from './update-jobs.component';
import { UpdateJobsFormComponent } from './update-jobs-form/update-jobs-form.component';
// new added @ 07/08/18 (pial)
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: UpdateJobsComponent, pathMatch:'full'}
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
  declarations: [UpdateJobsComponent, UpdateJobsFormComponent]
})
export class UpdateJobsModule { }
