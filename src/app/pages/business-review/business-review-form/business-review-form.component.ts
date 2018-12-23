import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
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
  selector: 'app-business-review-form',
  templateUrl: './business-review-form.component.html',
  styleUrls: ['./business-review-form.component.css']
})
export class BusinessReviewFormComponent implements OnInit {


  addReviewForm: FormGroup;
  
  reviewername: AbstractControl;
  email: AbstractControl;
  comment: AbstractControl;
  foodimage: AbstractControl;
    public businessReviewsCollection: AngularFirestoreCollection<any>;
    public businessReviewsObservable: Observable<any[]>;
  
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addReviewForm = this.fb.group({
      'reviewername': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'comment': ['', [Validators.required]],
      'foodimage': ['', [Validators.required]],
   
    });

    
    this.reviewername = this.addReviewForm.controls['reviewername'];
    this.email = this.addReviewForm.controls['email'];
    this.comment = this.addReviewForm.controls['comment'];
    this.foodimage = this.addReviewForm.controls['foodimage'];
   
    this.businessReviewsCollection = this.afs.collection('businessReviews');
    this.businessReviewsObservable = this.businessReviewsCollection.valueChanges();
     this.businessReviewsObservable.subscribe(businessReviews => {
       console.log('businessReviews',businessReviews);
     })
  }
  onSubmit(value) {
    
        value.reviewId = this.db.createId();
        this.db.collection('businessReviews').add(value).then(() => {
          alert('added businessReviews successfully');
        
          console.log('addig to businessReviews  Requests');
        })
    
    
    
      }
}
