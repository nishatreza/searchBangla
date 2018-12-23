import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage,AngularFireStorageReference,AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
import{AuthService} from '../../../core/auth.service'
import { finalize } from 'rxjs/operators';
import { Url } from 'url';
// import {MatProgressBarModule} from '@angular/material';
@Component({
  selector: 'app-employer',
  templateUrl: './employer.component.html',
  styleUrls: ['./employer.component.css']
})
export class EmployerComponent implements OnInit {
  @Input() jobData;
  @Input() userData;

  public savedJobsCollection: AngularFirestoreCollection<any>;
  public savedJobsObservable: Observable<any[]>;


  uploadPercent: number;
  progressBar: boolean = false;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    public authService:AuthService,
    private fb: FormBuilder
  ) { 
 
    

  }


  ngOnInit() {

    

  }
  savedJobs(){
    this.savedJobsCollection = this.afs.collection('savedjobs');
    this.savedJobsObservable = this.savedJobsCollection.valueChanges();
     this.savedJobsObservable.subscribe(jobsaved => {
      //  jobsaved = this.userData;
  
    // var jobui = {jobId:this.jobData.firestorId,uId:this.userData.uid};
    // jobsaved.push(jobui);
      
      alert('Saved this job successfully');

       console.log('savedjobs',jobsaved);
     })
      // console.log('addig to savedjobs  Requests',jobsaved);
    
    // this.jobId = this.db.createId();
    // value.applyId = this.db.createId();
    // var jobui = {jobId:jobId,uId:this.userData.uid};
    // console.log('test',test);

    // this.db.collection('savedjobs').add(this.jobId).then(() => {
    //   alert('added savedjobs successfully');
     
    //   console.log('addig to savedjobs  Requests');
    // })
    
  }
 
 
}
