import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { AuthService } from '../../core/auth.service';
import {Location} from '@angular/common';
// import { url } from 'inspector';

@Component({
  selector: 'app-job-apply',
  templateUrl: './job-apply.component.html',
  styleUrls: ['./job-apply.component.css']
})
export class JobApplyComponent implements OnInit {
  user:any;

  jobId;
  jobInfo;
  similarJobsInfo;
  public jobsCollection: AngularFirestoreCollection<any>;
  public jobsObservable: Observable<any[]>;
  public similarJobsCollection: AngularFirestoreCollection<any>;
  public similarJobsObservable: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    public auth:AuthService,
    // public authService: AuthService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private location: Location
  ) { }

  ngOnInit() {
    
    this.jobId = this.route.snapshot.params['id'] 
    
    console.log('job id changed ',this.jobId)
   this.jobsCollection = this.afs.collection('jobs',ref=>ref.where('firestoreId','==',this.jobId));
  this.jobsObservable = this.jobsCollection.valueChanges();
     this.jobsObservable.subscribe(job => {
       console.log('job',job[0]);
       this.jobInfo = job[0];
     })
  }

}
