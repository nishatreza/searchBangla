import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';

@Component({
  selector: 'app-business-details',
  templateUrl: './business-details.component.html',
  styleUrls: ['./business-details.component.css']
})
export class BusinessDetailsComponent implements OnInit {

  businessId;
  businessInfo;
  ratingsDB;
  ratingsInfo = {
    rating: 0,
    countRating: 0
  };
  public businessCollection: AngularFirestoreCollection<any>;
  public businessObservable: Observable<any[]>;
  public ratingsCollection: AngularFirestoreCollection<any>;
  public ratingsObservable: Observable<any[]>;

  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {
    this.businessId = this.route.snapshot.params['id']
    console.log('business id ', this.businessId)

    this.businessCollection = this.afs.collection('businesses', ref => ref.where('firestoreId', '==', this.businessId));
    this.businessObservable = this.businessCollection.valueChanges();
    this.businessObservable.subscribe(business => {
      console.log('business', business[0]);
      this.businessInfo = business[0];
    })

    // get the business ratings
    this.ratingsCollection = this.afs.collection('ratings', ref => ref.where('businessId', '==', this.businessId));
    this.ratingsObservable = this.ratingsCollection.valueChanges();
    this.ratingsObservable.subscribe(ratings => {
      this.ratingsDB = ratings;
      console.log('ratings from DB', this.ratingsDB);
      var totalRating = 0;
      for(var i=0; i<=ratings.length-1; i++){
        totalRating += ratings[i].rating;
      }
      this.ratingsInfo.rating = Math.round(totalRating / ratings.length);
      this.ratingsInfo.countRating = ratings.length;
    })
  }

}
