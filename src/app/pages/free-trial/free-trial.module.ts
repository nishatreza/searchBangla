import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonuiModule } from '../../ui/commonui/commonui.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { FreeTrialComponent } from './free-trial.component';
import { FreeTrialHeaderComponent } from './free-trial-header/free-trial-header.component';
import { PlanCardComponent } from './plan-card/plan-card.component';
import { CareerFeaturesComponent } from './career-features/career-features.component';

const routes: Routes = [
  {path:'', component: FreeTrialComponent, pathMatch:'full'}
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
  declarations: [FreeTrialComponent, FreeTrialHeaderComponent, PlanCardComponent, CareerFeaturesComponent]
})
export class FreeTrialModule { }
