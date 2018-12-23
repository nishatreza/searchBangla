import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-right-side',
  templateUrl: './menu-right-side.component.html',
  styleUrls: ['./menu-right-side.component.css']
})
export class MenuRightSideComponent implements OnInit {

  pickUpData = {
    pickUpStreetAddress: "108 W. 2nd Street",
    pickUpCityAddress: "Los Angeles, CA 90012",
    pickUpDate: "Friday, Oct 5th from 2:45pm-3:00pm"
  }
  constructor() { }

  ngOnInit() {
  }

}
