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
@Component({
  selector: 'app-job-apply-form',
  templateUrl: './job-apply-form.component.html',
  styleUrls: ['./job-apply-form.component.css']
})
export class JobApplyFormComponent implements OnInit {
  @Input() jobData;
  @Input() userData;
  loggedInUser:any;
  // loggedInUser: boolean = false;
resumeurl: any;
  dragAreaClass:any;
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uid: string;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;
  editMode: boolean;
  businessId: string; 
  value: any;
  applyForm: FormGroup;
  jobId:any;
  fileUp: AbstractControl;
  // phone: AbstractControl;
  //  resumeFile: AbstractControl;

  public jobApplicationCollection: AngularFirestoreCollection<any>;
  public jobApplicationObservable: Observable<any[]>;
 
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
    this.authService.user.subscribe(user => {this.loggedInUser = user});
    
  }

  ngOnInit() {

    this.applyForm = this.fb.group({
 
    });

    this.jobApplicationCollection = this.afs.collection('jobapplication');
this.jobApplicationObservable = this.jobApplicationCollection.valueChanges();
 this.jobApplicationObservable.subscribe(jobapplication => {
   console.log('jobapplication',jobapplication);
 })
  
 this.authService.user.subscribe(user => {this.loggedInUser = user}
  );
     
  }

  startUpload(event: FileList) {


    this.progressBar = true;

    const file = event.item(0)
  
    const id = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(`job_resumes/${id}`);
    this.task = this.ref.put(file);
  
  // observe percentage changes
  this.task.percentageChanges().subscribe(a => {
    this.uploadPercent = Math.round(a);
    setTimeout(() => {
      this.progressBar = false;
    }, 100000);
  });
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          console.log('url',url);
          this.resumeurl = url;
    

          this.task = null;
          // this.filesDbUrl.push(url);
          // console.log('filesDbUrl', this.filesDbUrl);
        });
      })
    ).subscribe();
  
    // this.percentage = this.task.percentageChanges();
    // this.snapshot   = this.task.snapshotChanges()
    // this.downloadURL = this.task.downloadURL(); 
  
  }
  onSubmit(value) {
    const applyId = this.db.createId();
        // value.applyId = this.db.createId();
        var test = {applyId:applyId,resumeurl:this.resumeurl};
        // console.log('test',test);

        this.db.collection('jobapplication').add(test).then(() => {
          alert('added jobapplication successfully');
          this.applyForm.reset();
          console.log('addig to jobapplication  Requests');
        })
    
}
// toggleHover(event: boolean) {
//   this.isHovering = event;
// }




isActive(snapshot) {
  return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
}

}
