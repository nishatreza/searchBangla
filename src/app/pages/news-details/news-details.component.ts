import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-news-details',
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {

  newsId;
  newsInfo;
  relatedNewsInfo;
  public newsCollection: AngularFirestoreCollection<any>;
  public newsObservable: Observable<any[]>;
  public relatedNewsCollection: AngularFirestoreCollection<any>;
  public relatedNewsObservable: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.newsId = this.route.snapshot.params['id']
    console.log('news id ', this.newsId)

    this.newsCollection = this.afs.collection('news', ref => ref.where('firestoreId', '==', this.newsId));
    this.newsObservable = this.newsCollection.valueChanges();
    this.newsObservable.subscribe(news => {
      console.log('news', news[0]);
      this.newsInfo = news[0];

      this.relatedNewsCollection = this.afs.collection('news', ref => ref.where('newsCategory', '==', this.newsInfo.newsCategory));
      this.relatedNewsObservable = this.relatedNewsCollection.valueChanges();
      this.relatedNewsObservable.subscribe(relatedNews => {
        console.log('relatedNews', relatedNews);
        this.relatedNewsInfo = relatedNews.filter(k => k.firestoreId != this.newsInfo.firestoreId);
        console.log('relatedNews after', this.relatedNewsInfo);
      })
    })
  }

}
