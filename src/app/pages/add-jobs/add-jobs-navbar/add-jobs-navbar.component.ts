import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-jobs-navbar',
  templateUrl: './add-jobs-navbar.component.html',
  styleUrls: ['./add-jobs-navbar.component.css']
})
export class AddJobsNavbarComponent implements OnInit {

  menuItems= [{
    item: 'Add jobs',
   
  itemLink:'/add-jobs',
  }
  // {
  //   item: 'Update jobs',
   
  // itemLink:'/update-jobs',
  // },
  // {
  //   item: 'Show jobs',
   
  // itemLink:'/show-jobs',
  // }
  // {
  //   item: 'eCommerce',
   
  //   itemLink:'/jobs',
  // },
  // {
  //   item: 'UI Design',
   
  //   itemLink:'/jobs',
  // },
  // {
  //   item: 'For business',
   
  //   itemLink:'/jobs',
  // },
  // {
  //   item: 'For job seekers',
   
  //   itemLink:'/jobs',
  // }

]

  constructor() { }

  ngOnInit() {
  }

}
