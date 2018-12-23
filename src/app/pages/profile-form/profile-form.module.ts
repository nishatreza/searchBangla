import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileFormComponent } from './profile-form.component';
import { FormComponent } from './form/form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { MainBodyComponent } from './main-body/main-body.component';
import { ProjectFormComponent } from './project-form/project-form.component';
import { ExperienceFormComponent } from './experience-form/experience-form.component';
import { InterestFormComponent } from './interest-form/interest-form.component';
import { SocialmediaFormComponent } from './socialmedia-form/socialmedia-form.component';

const routes: Routes = [
  {path:'', component: ProfileFormComponent, pathMatch:'full'}
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
  declarations: [ProfileFormComponent, FormComponent, MainBodyComponent, ProjectFormComponent, ExperienceFormComponent, InterestFormComponent, SocialmediaFormComponent]
})
export class ProfileFormModule { }
