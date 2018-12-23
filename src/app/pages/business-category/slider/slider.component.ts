import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  sliderImgs = [{
    link: '/',
    images: 'https://s3-media1.fl.yelpcdn.com/bphoto/0FTDxPTQXiRV8pBfMkIcfg/ls.jpg'
  },
  {
    link: '/',
    images: 'https://s3-media1.fl.yelpcdn.com/bphoto/6YaDVEocREOcaIEpUMojDA/ls.jpg'
  },
  {
    link: '/',
    images: 'https://s3-media4.fl.yelpcdn.com/bphoto/K48sSeIuHURatMBrSTfOTg/ls.jpg'
  }]

  constructor() { }

  ngOnInit() {
  }

}
