import { Component, OnInit } from '@angular/core';
// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
@Component({
  selector: 'app-top-stories-and-hot-news',
  templateUrl: './top-stories-and-hot-news.component.html',
  styleUrls: ['./top-stories-and-hot-news.component.css']
})
export class TopStoriesAndHotNewsComponent implements OnInit {

  newsData = [];
  topStoriesData;
  hotNewsData;

  public loading = false;
  // declaring collection and observable
  public mainNewsCollection: AngularFirestoreCollection<any>;
  public mainNewsObservable: Observable<any[]>;
  offset = 10;
  defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    // private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    // collection
    this.mainNewsCollection = this.afs.collection('news');
    this.mainNewsObservable = this.mainNewsCollection.valueChanges();
    this.mainNewsObservable.subscribe(news => {
      this.newsData = news;
      console.log('news', this.newsData);
      this.topStoriesFilter();
      this.hotNewsFilter();
    })
  }

  topStoriesFilter() {
    this.topStoriesData = this.newsData.filter(k => k.newsCategory == 'TOP STORIES');
    console.log('topStoriesFilter', this.topStoriesData);
  }

hotNewsFilter() {

	this.hotNewsData = this.newsData.filter(k => k.newsCategory != 'TOP STORIES' && k.newsCategory != 'MISSED STORIES');

	console.log('hotNewsFilter', this.hotNewsData);

}

}
