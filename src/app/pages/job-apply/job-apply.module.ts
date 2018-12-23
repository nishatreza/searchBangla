import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobApplyComponent } from './job-apply.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { JobApplyFormComponent } from './job-apply-form/job-apply-form.component';
const routes: Routes = [
  
 
  {path:'', component: JobApplyComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    NgbModule,
    CommonuiModule
  ],
  declarations: [JobApplyComponent, JobApplyFormComponent]
})
export class JobApplyModule { }
