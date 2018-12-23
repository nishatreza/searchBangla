import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCategoryMenuComponent } from './business-category-menu.component';
import { MenuComponent } from './menu/menu.component';
import { MenuRightSideComponent } from './menu-right-side/menu-right-side.component';
import { RestaurantMainComponent } from './restaurant-main/restaurant-main.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {path:'', component: BusinessCategoryMenuComponent, pathMatch:'full'}
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
  declarations: [BusinessCategoryMenuComponent, MenuComponent, MenuRightSideComponent, RestaurantMainComponent]
})
export class BusinessCategoryMenuModule { }
