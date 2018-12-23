import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-business-list-map',
  templateUrl: './business-list-map.component.html',
  styleUrls: ['./business-list-map.component.css']
})

export class BusinessListMapComponent implements OnInit {
lat: number = 51.678418;
lng: number = 7.809007;



  constructor() { 
    
  }

  ngOnInit() {
  }
  

}
