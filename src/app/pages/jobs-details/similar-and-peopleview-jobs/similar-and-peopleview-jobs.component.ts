import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-similar-and-peopleview-jobs',
  templateUrl: './similar-and-peopleview-jobs.component.html',
  styleUrls: ['./similar-and-peopleview-jobs.component.css']
})
export class SimilarAndPeopleviewJobsComponent implements OnInit {
  @Input() similarJobsData;

  constructor() { }

  ngOnInit() {
  }

}
