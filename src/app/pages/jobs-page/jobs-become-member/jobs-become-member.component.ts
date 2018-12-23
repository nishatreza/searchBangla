import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs-become-member',
  templateUrl: './jobs-become-member.component.html',
  styleUrls: ['./jobs-become-member.component.css']
})
export class JobsBecomeMemberComponent implements OnInit {

  memberMassage = {message: "We get it—looking for work is hard work. Let us make it easier for you. Sign up for Monster, then upload your resume so recruiters can find you and so you can apply for jobs more quickly. Plus you can get job alerts and helpful job content delivered to your inbox. What are you waiting for?"}

  constructor() { }

  ngOnInit() {
  }

}
