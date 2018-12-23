import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";

@Component({
  selector: 'app-missed-in-case',
  templateUrl: './missed-in-case.component.html',
  styleUrls: ['./missed-in-case.component.css']
})
export class MissedInCaseComponent implements OnInit {
  newsData = [];
  missedStoriesData;


  // missedInCase = {
  //   newsLink: "/",
  //   newsImg: "https://cdn.cnn.com/cnnnext/dam/assets/171121092548-03-putin-assad-1121-restricted-overlay-tease.jpg",
  //   newsHeadline: "A deadly storm is coming in Syria",
  //   rightBarNews: [{
  //     newsLink: "/",
  //     newsImg: "https://cdn.cnn.com/cnnnext/dam/assets/180823164426-03-rwanda-politics-video-exlarge-tease.jpg",
  //     newsHeadline: "She wanted to be president, but ended up jailed instead",
  //   },{
  //     newsLink: "/",
  //     newsImg: "https://cdn.cnn.com/cnnnext/dam/assets/180827152051-spa-crash-exlarge-tease.jpg",
  //     newsHeadline: "The crashes that changed Formula One",
  //   },{
  //     newsLink: "/",
  //     newsImg: "https://cdn.cnn.com/cnnnext/dam/assets/171121092548-03-putin-assad-1121-restricted-overlay-tease.jpg",
  //     newsHeadline: "A deadly storm is coming in Syria 4",
  //   }]
  // }
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
    this.mainNewsCollection = this.afs.collection('news');
    this.mainNewsObservable = this.mainNewsCollection.valueChanges();
    this.mainNewsObservable.subscribe(news => {
      this.newsData = news;
      console.log('news', this.newsData);
      this.missedStoriesFilter();
     
    
    })
  }
  missedStoriesFilter() {
    this.missedStoriesData = this.newsData.filter(k => k.newsCategory == 'MISSED STORIES');
    console.log('missedStoriesFilter', this.missedStoriesData);
  }



}
