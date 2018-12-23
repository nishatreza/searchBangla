import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingPageComponent } from './landing-page.component';
import { ServiceItemsComponent } from './service-items/service-items.component';
import { Routes, RouterModule } from '@angular/router';
import {CommonuiModule} from '../../ui/commonui/commonui.module';


const routes: Routes = [
  
 
  {path:'', component: LandingPageComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    CommonuiModule,

    RouterModule.forChild(routes)

  ],
  declarations: [LandingPageComponent, ServiceItemsComponent]
})
export class LandingPageModule { }
