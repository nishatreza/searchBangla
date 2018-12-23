import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddJobsComponent } from './add-jobs.component';
// import { AddJobsNavbarComponent } from './add-jobs-navbar/add-jobs-navbar.component';
import { AddJobsFormComponent } from './add-jobs-form/add-jobs-form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  {path:'', component: AddJobsComponent, pathMatch:'full'}
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
  declarations: [AddJobsComponent,  AddJobsFormComponent]
})
export class AddJobsModule { }
