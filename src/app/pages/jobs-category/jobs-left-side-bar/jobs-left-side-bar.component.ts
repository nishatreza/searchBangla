import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-left-side-bar',
  templateUrl: './jobs-left-side-bar.component.html',
  styleUrls: ['./jobs-left-side-bar.component.css']
})
export class JobsLeftSideBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  clicked(event) {
    event.target.classList.toggle('class3'); // To toggle
  }

}
