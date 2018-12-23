import { Component, OnInit } from '@angular/core';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
@Component({
  selector: 'app-job-listing',
  templateUrl: './job-listing.component.html',
  styleUrls: ['./job-listing.component.css']
})
export class JobListingComponent implements OnInit {
  public loading = false;
  // declaring collection and observable
    public jobsCollection: AngularFirestoreCollection<any>;
    public jobsObservable: Observable<any[]>;
    offset = 10;
   

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,

  ) { }

  ngOnInit() {
    this.jobsCollection = this.afs.collection('jobs');
    this.jobsObservable = this.jobsCollection.valueChanges();
     this.jobsObservable.subscribe(jobs => {
       console.log('jobs',jobs);
     })
  }

}
