import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-business-list',
  templateUrl: './business-list.component.html',
  styleUrls: ['./business-list.component.css']
})
export class BusinessListComponent implements OnInit {
  @Input() businessDataList;
  
 
  // rating new
ratingClicked: number;
itemIdRatingClicked: string;
items = [
  { 'id': 0, 'rating': 3 }]
  // { 'id': 1, 'rating': 1 },
  // { 'id': 2, 'rating': 2 },
  // { 'id': 3, 'rating': 5 },
  // { 'id': 4, 'rating': 4 }
;
ratingComponentClick(clickObj: any): void {
  const item = this.items.find(((i: any) => i.id === clickObj.itemId));
  if (!!item) {
    item.rating = clickObj.rating;
    this.ratingClicked = clickObj.rating;
    // this.itemIdRatingClicked = item.company;
  }

}


// rating end
  // costPrice = this.businessDataList.cost;
  // if(costPrice = low){

  // }

  // categoryList = [{
  //   businessName: 'Hollow Cow',
  //   businessLink: '/',
  //   reviewsNumber: '164',
  //   category: [{
  //     link: '/',
  //     type: 'Seafood'
  //   },{
  //     link: '/',
  //     type: 'Bars'
  //   },{
  //     link: '/',
  //     type: 'American (Traditional)'
  //   }],
  //   businessPhone: '(415) 986-8612',
  //   businessStreet: '1230 Grant Ave',
  //   businessCity: 'North Beach/Telegraph Hill',
  //   review: "Perfect for a date night, cozy special occasion, or any kind of intimate gathering! The restaurant itself is quite small so I definitely wouldn't take a large…",
  //   reviewLink: '/',
  //   reservation: '/',
  //   order: '/'
  // },{
  //   businessName: 'Hollow Cow',
  //   businessLink: '/',
  //   reviewsNumber: '164',
  //   category: [{
  //     link: '/',
  //     type: 'Seafood'
  //   },{
  //     link: '/',
  //     type: 'Bars'
  //   },{
  //     link: '/',
  //     type: 'American (Traditional)'
  //   }],
  //   businessPhone: '(415) 986-8612',
  //   businessStreet: '1230 Grant Ave',
  //   businessCity: 'North Beach/Telegraph Hill',
  //   review: "Perfect for a date night, cozy special occasion, or any kind of intimate gathering! The restaurant itself is quite small so I definitely wouldn't take a large…",
  //   reviewLink: '/',
  //   reservation: '/',
  //   order: '/'
  // }]

  constructor() { }

  ngOnInit() {
  }

}
