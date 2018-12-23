import { Component, OnInit, Input} from '@angular/core';
import 'firebase/firestore';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {Location} from '@angular/common';
import { animationFrame } from 'rxjs/internal/scheduler/animationFrame';

@Component({
  selector: 'app-similar-jobs',
  templateUrl: './similar-jobs.component.html',
  styleUrls: ['./similar-jobs.component.css']
})
export class SimilarJobsComponent implements OnInit {
  @Input() similarJobsData;
//  url = this.similarJobsData.firestoreId;
  //  messageListRef = new Firebase('https://searchbangla-7a757.firebaseio.com');
// firstMessagesQuery = this.messageListRef.startAt().limit(5);
  constructor(
    // private location: Location


  ) { }

  ngOnInit() {
    // this.location.go(this.url);

  }

}
