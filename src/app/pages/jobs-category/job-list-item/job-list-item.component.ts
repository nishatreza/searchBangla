import { Component, OnInit, Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';


@Component({
  selector: 'app-job-list-item',
  templateUrl: './job-list-item.component.html',
  styleUrls: ['./job-list-item.component.css']
})
export class JobListItemComponent implements OnInit {
  @Input() jobsDataList;
  @Input() jobsCount;

  

  p:any;
  // jobsDataList = [];

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute, 
    private router: Router
  ) {

    for (let i = 1; i <= 100; i++) {
      // this.jobsDataList.push('$jobsDataList');
    }
   }

  ngOnInit() {
  }

}
