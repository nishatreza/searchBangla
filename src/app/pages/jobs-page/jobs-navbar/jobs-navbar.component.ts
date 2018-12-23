import { Component, OnInit } from '@angular/core';
import{AuthService} from '../../../core/auth.service'

@Component({
  selector: 'app-jobs-navbar',
  templateUrl: './jobs-navbar.component.html',
  styleUrls: ['./jobs-navbar.component.css']
})
export class JobsNavbarComponent implements OnInit {

  // menuItems= [{
  //     item: 'Add jobs',
     
  //   itemLink:'/add-jobs',
  //   }
  //   {
  //     item: 'eCommerce',
     
  //     itemLink:'/jobs',
  //   },
  //   {
  //     item: 'UI Design',
     
  //     itemLink:'/jobs',
  //   },
  //   {
  //     item: 'For business',
     
  //     itemLink:'/jobs',
  //   },
  //   {
  //     item: 'For job seekers',
     
  //     itemLink:'/jobs',
  //   }

  // ]


  loggedInUser:any;
  



  constructor(
    public authService:AuthService,

  ) { }

  ngOnInit() {
    this.authService.user.subscribe(user => {this.loggedInUser = user})

  }
  jobsign(){
    alert('sign in to add jobs');
  }

}
