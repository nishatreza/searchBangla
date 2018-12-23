import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddRestaurantMenuComponent } from './add-restaurant-menu.component';
import { RestaurantMenuFormComponent } from './restaurant-menu-form/restaurant-menu-form.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonuiModule } from '../../ui/commonui/commonui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


const routes: Routes = [


  { path: '', component: AddRestaurantMenuComponent, pathMatch: 'full' }
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
  declarations: [AddRestaurantMenuComponent, RestaurantMenuFormComponent]
})
export class AddRestaurantMenuModule { }
