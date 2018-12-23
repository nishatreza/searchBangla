import { Component, OnInit } from '@angular/core';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';

// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent implements OnInit {
  public loading = false;
  // declaring collection and observable
    public jobsCollection: AngularFirestoreCollection<any>;
    public jobsObservable: Observable<any[]>;
    offset = 10;
  creatAt: any[];
   
  
  // offset=10;
  // defaultImage="https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";


  // SingleJobData = [{
  //   jobLink: '/',
  //   comLogo: '../../../assets/images/com.png',
  //   saveLink: '/',
  //   jobTitle: 'IT Specialist Engineer',
  //   comName: 'Senior Executive/ Executive',
  //   comAddress: 'Dhaka, BD',
  //   publishDate: '2 weeks ago'
  // },
  // {
  //   jobLink: '/',
  //   comLogo: '../../../assets/images/com.png',
  //   saveLink: '/',
  //   jobTitle: 'IT Specialist Engineer',
  //   comName: 'Senior Executive/ Executive',
  //   comAddress: 'Dhaka, BD',
  //   publishDate: '2 weeks ago'
  // },
  // {
  //   jobLink: '/',
  //   comLogo: '../../../assets/images/com.png',
  //   saveLink: '/',
  //   jobTitle: 'IT Specialist Engineer',
  //   comName: 'Senior Executive/ Executive',
  //   comAddress: 'Dhaka, BD',
  //   publishDate: '2 weeks ago'
  // },
  // {
  //   jobLink: '/',
  //   comLogo: '../../../assets/images/com.png',
  //   saveLink: '/',
  //   jobTitle: 'IT Specialist Engineer',
  //   comName: 'Senior Executive/ Executive',
  //   comAddress: 'Dhaka, BD',
  //   publishDate: '2 weeks ago'
  // },
  // {
  //   jobLink: '/',
  //   comLogo: '../../../assets/images/com.png',
  //   saveLink: '/',
  //   jobTitle: 'IT Specialist Engineer',
  //   comName: 'Senior Executive/ Executive',
  //   comAddress: 'Dhaka, BD',
  //   publishDate: '2 weeks ago'
  // }]

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
     this.jobsObservable.subscribe(job => {
       console.log('job',job);

     })
    //  this.creatAt = new Date() ;
     
  }

}
