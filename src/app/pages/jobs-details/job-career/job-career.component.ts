import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-job-career',
  templateUrl: './job-career.component.html',
  styleUrls: ['./job-career.component.css']
})
export class JobCareerComponent implements OnInit {
  @Input() jobData;

  constructor() { }

  ngOnInit() {
  }

}
