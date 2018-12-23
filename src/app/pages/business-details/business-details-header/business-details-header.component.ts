import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-business-details-header',
  templateUrl: './business-details-header.component.html',
  styleUrls: ['./business-details-header.component.css']
})
export class BusinessDetailsHeaderComponent implements OnInit {

  @Input() businessData;
  @Input() ratingsData;

  offset = 10;
  defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";

  constructor() { }

  ngOnInit() {
  }

}
