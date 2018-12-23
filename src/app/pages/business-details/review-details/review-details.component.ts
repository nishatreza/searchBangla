import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-review-details',
  templateUrl: './review-details.component.html',
  styleUrls: ['./review-details.component.css']
})
export class ReviewDetailsComponent implements OnInit {

  @Input() ratingsInfo;  
  
  constructor() { }

  ngOnInit() {
  }

}
