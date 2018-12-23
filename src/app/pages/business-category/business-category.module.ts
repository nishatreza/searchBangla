import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BusinessCategoryComponent } from './business-category.component';
import { Routes, RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import {CommonuiModule} from '../../ui/commonui/commonui.module';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HeaderMenulistComponent } from './header-menulist/header-menulist.component';
import { BusinessListComponent } from './business-list/business-list.component';
import { BusinessListMapComponent } from './business-list-map/business-list-map.component';
import { SliderComponent } from './slider/slider.component';
import { BrowserModule } from '@angular/platform-browser';
// import { Pipe, PipeTransform } from '@angular/core';
//  import { ReplaceDashPipe } from '../../shared/pipes/replaceDash.pipe';

// map
import { AgmCoreModule } from '@agm/core';
import { NguiMapModule} from '@ngui/map';
import { map } from 'rxjs/operators';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
// @Pipe({name: 'replaceUnderscore'})
// export class ReplaceUnderscorePipe implements PipeTransform {
//   transform(value: string): string {
//     return value? value.replace(/_/g, " ") : value;
//   }
// }
const routes: Routes = [
  
 
  {path:'', component: BusinessCategoryComponent, pathMatch:'full'}
]
@NgModule({
  imports: [
    CommonModule,
    // BrowserModule,
    LazyLoadImageModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({
      // apiKey:'AIzaSyCx73BCxCr59jWPuAjtktsc4NJRGt-tRMQ'
      apiKey:'AIzaSyAxJlwE9g99wu1Q81FLIHD5DGFURWSzHj4'

    }),
    // NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyCx73BCxCr59jWPuAjtktsc4NJRGt-tRMQ '}),
    CommonuiModule

  ],
  exports: [
    // ReplaceUnderscorePipe
 ],
  declarations: [BusinessCategoryComponent, HeaderMenulistComponent, BusinessListComponent, BusinessListMapComponent, SliderComponent]
})
export class BusinessCategoryModule { }
