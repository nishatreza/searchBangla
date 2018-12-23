import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-restaurant-main',
  templateUrl: './restaurant-main.component.html',
  styleUrls: ['./restaurant-main.component.css']
})
export class RestaurantMainComponent implements OnInit {
  @Input() businessDataListMenu;

  constructor() { }

  ngOnInit() {
  }

}
