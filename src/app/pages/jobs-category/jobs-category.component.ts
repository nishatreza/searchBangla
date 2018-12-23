import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-jobs-category',
  templateUrl: './jobs-category.component.html',
  styleUrls: ['./jobs-category.component.css']
})
export class JobsCategoryComponent implements OnInit {
  jobsCategory;
  jobsList;
  public jobsCollection: AngularFirestoreCollection<any>;
  public jobsObservable: Observable<any[]>;
  jobCount: number;

  constructor(

    private route: ActivatedRoute,
    private afs: AngularFirestore,
  
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { 
    this.jobsCategory = this.route.snapshot.params['link'];
    console.log('jobs category link',this.jobsCategory);
   
  }

  ngOnInit() {
      
   this.jobsCollection = this.afs.collection('jobs',ref=>ref.where('category','==',this.jobsCategory));
   this.jobsObservable = this.jobsCollection.valueChanges();
    this.jobsObservable.subscribe(jobs => {
      console.log('jobs',jobs);
      this.jobsList = jobs;
     this.jobCount = jobs.length;

     })
  }

}
