import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in.component';
import { SignInMiddleComponent } from './sign-in-middle/sign-in-middle.component';

import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// import { LazyLoadImageDirective } from 'ng2-lazyload-image';


const routes: Routes = [
  {path:'', component: SignInComponent, pathMatch:'full'}
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
  declarations: [SignInComponent, SignInMiddleComponent]
})
export class SignInModule { }
