import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowBusinessComponent } from './show-business.component';
import { ShowBusinessFormComponent } from './show-business-form/show-business-form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

const routes: Routes = [
  
 
  {path:'', component: ShowBusinessComponent, pathMatch:'full'}
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
  declarations: [ShowBusinessComponent, ShowBusinessFormComponent]
})
export class ShowBusinessModule { }
