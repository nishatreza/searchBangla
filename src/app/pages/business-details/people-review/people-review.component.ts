import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-review',
  templateUrl: './people-review.component.html',
  styleUrls: ['./people-review.component.css']
})
export class PeopleReviewComponent implements OnInit {
  PeopleReviewData  =[{
    reviewImage: 'https://s3-media1.fl.yelpcdn.com/bphoto/BXKbroE0EeQK-ONJ-NiNYQ/60s.jpg',
    reviewLink:'/',
    reviewName: 'Um Ma Son ',
    reviewNumber: '352 reviews',
    reviewLocation: '$$ Korean Outer Richmond ',


      },
      {
        reviewImage: 'https://s3-media4.fl.yelpcdn.com/bphoto/RGJGDGQfFISByDVdfiW11g/60s.jpg',
        reviewLink:'/',
        reviewName: 'Camp BBQ ',
        reviewNumber: '252 reviews',
        reviewLocation: '$$ Japanese Asian Fusion, Barbeque Inner Richmond , ',
   

      },
      
      {
        reviewImage: 'https://s3-media4.fl.yelpcdn.com/bphoto/f259CtvnnUKhsHYzqdOV6A/60s.jpg',
        reviewLink:'/',
        reviewName: 'Dancing Bull ',
        reviewNumber: '192 reviews',
        reviewLocation: '$$ Korean Barbeque, Seafood Inner Richmond',
  

      },
      {
        reviewImage: 'https://s3-media3.fl.yelpcdn.com/bphoto/QoZ42qrrwmIMlfF7rQ9c3A/60s.jpg',
        reviewLink:'/',
        reviewName: 'Arashi Sushi  ',
        reviewNumber: '382 reviews',
        reviewLocation: '$$ Korean Sushi Bars, Japanese Inner Richmond ',
   

      },
     
     
  
    ]
  
  
    
  
  
  constructor() { }

  ngOnInit() {
  }

}
