import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
@Component({
  selector: 'app-most-rated',
  templateUrl: './most-rated.component.html',
  styleUrls: ['./most-rated.component.css']
})
export class MostRatedComponent implements OnInit {
  newsData = [];
  mostRatedData;
  public loading = false;
  // declaring collection and observable
  public mainNewsCollection: AngularFirestoreCollection<any>;
  public mainNewsObservable: Observable<any[]>;
  offset = 10;
  constructor(
        private afs: AngularFirestore,
    private route: ActivatedRoute,
    // private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
        this.mainNewsCollection = this.afs.collection('news');
    this.mainNewsObservable = this.mainNewsCollection.valueChanges();
    this.mainNewsObservable.subscribe(news => {
      this.newsData = news;
      console.log('news', this.newsData);
      this.mostRatedFilter();
     
    
    })
  }
  mostRatedFilter() {
    this.mostRatedData = this.newsData.filter(k => k.newsCategory == 'MOST RATED');
    console.log('mostRatedFilter', this.mostRatedData);
  }

}
