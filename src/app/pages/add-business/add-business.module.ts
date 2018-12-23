import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddBusinessComponent } from './add-business.component';
// import { AddBusinessnavbarComponent } from './add-businessnavbar/add-businessnavbar.component';
import { AddBusinessFormComponent } from './add-business-form/add-business-form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';


const routes: Routes = [
  
 
  {path:'', component: AddBusinessComponent, pathMatch:'full'}
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
  declarations: [AddBusinessComponent, AddBusinessFormComponent]
})
export class AddBusinessModule { }
