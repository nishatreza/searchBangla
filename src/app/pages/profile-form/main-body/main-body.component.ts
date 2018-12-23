import { Component,Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-body',
  templateUrl: './main-body.component.html',
  styleUrls: ['./main-body.component.css']
})
export class MainBodyComponent implements OnInit {
  @Input() userData;

  constructor() { }

  ngOnInit() {
  }

}
