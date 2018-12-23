import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.css']
})
export class JobDescriptionComponent implements OnInit {
  @Input() jobData;

  constructor() { }

  ngOnInit() {
  }

}
