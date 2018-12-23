import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-business-navbar',
  templateUrl: './update-business-navbar.component.html',
  styleUrls: ['./update-business-navbar.component.css']
})
export class UpdateBusinessNavbarComponent implements OnInit {


  
  menuItems = [{
    item: 'Add business',
   
  itemLink:'/add-business',
  }
  // {
  //   item: 'Best businesses',
   
  //   itemLink:'/business',
  // },
  // {
  //   item: 'Review',
   
  //   itemLink:'/business',
  // },
  // {
  //   item: 'Hot & new businesses',
   
  //   itemLink:'/business',
  // },
  // {
  //   item: 'Write a review',
   
  //   itemLink:'/business',
  // }

]

  constructor() { }

  ngOnInit() {
  }

}
