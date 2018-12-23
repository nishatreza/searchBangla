import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-news-navbar',
  templateUrl: './add-news-navbar.component.html',
  styleUrls: ['./add-news-navbar.component.css']
})
export class AddNewsNavbarComponent implements OnInit {

  

  menuItems = [{
    item: 'Add news',
   
  itemLink:'/add-news',
  }
  // {
  //   item: 'Update news',
   
  // itemLink:'/update-news',
  // },
  // {
  //   item: 'Show news',
   
  // itemLink:'/show-news',
  // }
  // {
  //   item: 'Tech',
   
  //   itemLink:'/news',
  // },
  // {
  //   item: 'Earth',
   
  //   itemLink:'/news',
  // },
  // {
  //   item: 'Health',
   
  //   itemLink:'/news',
  // },
  // {
  //   item: 'Sports',
   
  //   itemLink:'/news',
  // },
  // {
  //   item: 'Weather',
   
  //   itemLink:'/news',
  // },
  // {
  //   item: 'Entertainment & arts',
   
  //   itemLink:'/news',
  // },
  // {
  //   item: 'Special reports',
   
  //   itemLink:'/news',
  // }
 

]

  constructor() { }

  ngOnInit() {
  }

}
