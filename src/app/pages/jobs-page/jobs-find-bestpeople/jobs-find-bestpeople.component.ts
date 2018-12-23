import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-find-bestpeople',
  templateUrl: './jobs-find-bestpeople.component.html',
  styleUrls: ['./jobs-find-bestpeople.component.css']
})
export class JobsFindBestpeopleComponent implements OnInit {

  employerMessage = {message: "Monster has designed solutions that span social, mobile and the cloud to solve the challenges of casting the widest possible net and making the right connection with the right candidate, in the right context, at the right time. In other words, we can help you reach, connect with and hire the very best people."}

  
  constructor() { }

  ngOnInit() {
  }

}
