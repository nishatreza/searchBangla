import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfilePageComponent } from './profile-page.component';
import { CurrentProgressComponent } from './current-progress/current-progress.component';
import { InterestsComponent } from './interests/interests.component';
import { ProfileHeaderComponent } from './profile-header/profile-header.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { LazyLoadImageDirective } from 'ng2-lazyload-image';

import { MainBodyComponent } from './main-body/main-body.component';
import { SocialmediaInfoComponent } from './socialmedia-info/socialmedia-info.component';

const routes: Routes = [
  {path:'', component: ProfilePageComponent, pathMatch:'full'}
]


@NgModule({
  imports: [
    CommonModule,
    LazyLoadImageModule,
    FormsModule,
    ReactiveFormsModule,
    // LazyLoadImageDirective,
    RouterModule.forChild(routes),
    CommonuiModule,
    NgbModule,
  ],
  declarations: [ProfilePageComponent, CurrentProgressComponent, InterestsComponent, ProfileHeaderComponent, WorkExperienceComponent, MainBodyComponent, SocialmediaInfoComponent]
})
export class ProfilePageModule { }
