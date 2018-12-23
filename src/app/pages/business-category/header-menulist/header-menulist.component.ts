import { Component, OnInit, Input} from '@angular/core';


@Component({
  selector: 'app-header-menulist',
  templateUrl: './header-menulist.component.html',
  styleUrls: ['./header-menulist.component.css']
})
export class HeaderMenulistComponent implements OnInit {
  @Input() businessDataList;
 @Input() businessCategory;
  // restaurant = this.businessDataList.category.get('restaurants');
// categoryListData = 
//   {
// title: 'Restaurants',
// country: 'San Francisco, CA',

//   }

isCategoryRestaurant(){
if (this.businessCategory === 'restaurants'){
  return true;
}
else{
  return false;
}
}
  constructor() { }

  ngOnInit() {
  }

}
