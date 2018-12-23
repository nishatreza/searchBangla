import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-socialmedia-info',
  templateUrl: './socialmedia-info.component.html',
  styleUrls: ['./socialmedia-info.component.css']
})
export class SocialmediaInfoComponent implements OnInit {
@Input() userData;

  constructor() { }

  ngOnInit() {
  }

}
