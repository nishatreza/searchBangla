import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonuiModule } from '../../ui/commonui/commonui.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewRestaurantMenuComponent } from './view-restaurant-menu.component';
import { RestaurantMenuComponent } from './restaurant-menu/restaurant-menu.component';
import { RestaurantSidebarComponent } from './restaurant-sidebar/restaurant-sidebar.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', component: ViewRestaurantMenuComponent, pathMatch: 'full' }
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
  declarations: [ViewRestaurantMenuComponent, RestaurantMenuComponent, RestaurantSidebarComponent, CartComponent]
})
export class ViewRestaurantMenuModule { }
