import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UpdateBusinessComponent } from './update-business.component';
import { UpdateBusinessNavbarComponent } from './update-business-navbar/update-business-navbar.component';
import { UpdateBusinessFormComponent } from './update-business-form/update-business-form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  
 
  {path:'', component: UpdateBusinessComponent, pathMatch:'full'}
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
  declarations: [UpdateBusinessComponent, UpdateBusinessNavbarComponent, UpdateBusinessFormComponent]
})
export class UpdateBusinessModule { }
