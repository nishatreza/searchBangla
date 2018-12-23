import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileSubscriptionComponent } from './profile-subscription.component';
import { ProfilePriceComponent } from './profile-price/profile-price.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { SubscriptionMainBodyComponent } from './subscription-main-body/subscription-main-body.component';

const routes: Routes = [
  {path:'', component: ProfileSubscriptionComponent, pathMatch:'full'}
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
  declarations: [ProfileSubscriptionComponent, ProfilePriceComponent, SubscriptionMainBodyComponent]
})
export class ProfileSubscriptionModule { }
