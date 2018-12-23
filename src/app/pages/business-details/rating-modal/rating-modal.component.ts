import { Component, OnInit, Input } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../core/auth.service';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";

@Component({
  selector: 'app-rating-modal',
  templateUrl: './rating-modal.component.html',
  styleUrls: ['./rating-modal.component.css'],
  providers: [NgbModal]
})
export class RatingModalComponent implements OnInit {

  businessId;
  rating: number;
  user: any;
  ratingsInfo;
  ratingRequired = false;
  ratingsDoc: AngularFirestoreDocument;
  public ratingsCollection: AngularFirestoreCollection<any>;
  public ratingsObservable: Observable<any[]>;

  constructor(
    private modalService: NgbModal,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu: FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    // get the user data
    this.auth.user.subscribe(user => {
      this.user = user;
    });
    // get the business ID
    this.businessId = this.route.snapshot.params['id'];
    // get the business ratings
    this.ratingsCollection = this.afs.collection('ratings', ref => ref.where('businessId', '==', this.businessId));
    this.ratingsObservable = this.ratingsCollection.snapshotChanges().map(actions => {
      return actions.map(action => {
        const data = action.payload.doc.data();
        const id = action.payload.doc.id;
        return { id, data };
      })
    })
    this.ratingsObservable.subscribe(ratings => {
      this.ratingsInfo = ratings;
    })
  }

  open(content) {
    this.modalService.open(content);
  }

  onClick(rating) {
    this.rating = rating;
  }

  saveReview(review) {
    const reviewData = {
      userId: this.user.uid,
      userPhotoUrl: this.user.photoURL,
      businessId: this.businessId,
      rating: this.rating,
      reviewMessage: review.value,
    }
    //check if user exist
    if (this.ratingsInfo.find(k => k.data.userId == this.user.uid)) {
      //ratings required
      if (reviewData.rating == null && reviewData.reviewMessage == '') {
        this.ratingRequired = true;
      } else if (reviewData.rating != null && reviewData.reviewMessage != '') {
        this.ratingRequired = false;
        //update the raings
        this.updateReview(reviewData.rating, reviewData.reviewMessage);
      }
    } else {
      //ratings required
      if (reviewData.rating == null && reviewData.reviewMessage == '') {
        this.ratingRequired = true;
      } else if (reviewData.rating != null && reviewData.reviewMessage != '') {
        this.ratingRequired = false;
        //save to database
        this.db.collection('ratings').add(reviewData).then(() => {
          alert('added rating successfully');
        })
      }
    }
    this.rating = null;
    review.value = null;
  }

  updateReview(rating, reviewMessage) {
    this.ratingsDoc = this.afs.doc(`ratings/${this.ratingsInfo[0].id}`);
    this.ratingsDoc.update({ rating: rating, reviewMessage: reviewMessage });
    alert('edited rating successfully');
  }

}
