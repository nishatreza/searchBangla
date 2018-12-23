import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-business-category',
  templateUrl: './business-category.component.html',
  styleUrls: ['./business-category.component.css']
})
export class BusinessCategoryComponent implements OnInit {
  // businessId;
  businessCategory;
  businessList;
  public businessCollection: AngularFirestoreCollection<any>;
  public businessObservable: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) {
    this.businessCategory = this.route.snapshot.params['link'];
    console.log('business category link', this.businessCategory);
  }

  ngOnInit() {
    this.businessCollection = this.afs.collection('businesses', ref => ref.where('category', '==', this.businessCategory));
    this.businessObservable = this.businessCollection.valueChanges();
    this.businessObservable.subscribe(businesses => {
      console.log('businesses', businesses);
      this.businessList = businesses;
      console.log('businesses length', businesses.length);
    })
  }

}
