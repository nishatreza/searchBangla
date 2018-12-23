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
  selector: 'app-hot-and-new-business',
  templateUrl: './hot-and-new-business.component.html',
  styleUrls: ['./hot-and-new-business.component.css']
})
export class HotAndNewBusinessComponent implements OnInit {

  public loading = false;
  // declaring collection and observable
    public businessCollection: AngularFirestoreCollection<any>;
    public businessObservable: Observable<any[]>;
    offset = 10;
    defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";
  
  // hotAndNewBusinessData  = {
    
  //   hotAndNewBusinessItems: [{
  //     hotAndNewBusinessImage: 'https://s3-media3.fl.yelpcdn.com/bphoto/-laLvSYJOnjujlhXE5xTtA/l.jpg',
  //     hotAndNewBusinessLink:'/',
  //     hotAndNewBusinessName: 'Violet’s',
  //     reviewNumber: '',
  //     reviewLocation: 'Cocktail Bars, Wine Bars, Seafood Outer Richmond ',
  //     openedDays: '',



  //       },
  //       {
  //         hotAndNewBusinessImage: 'https://s3-media1.fl.yelpcdn.com/bphoto/VGTRFAepNSWm8FXhFJZ09g/l.jpg',
  //         hotAndNewBusinessLink:'/',
  //         hotAndNewBusinessName: 'Mixt ',
  //         reviewNumber: '16 reviews',
  //         reviewLocation: '$$  Salad, American (New), Vegan Mission , ',
  //         openedDays: 'Opened 7 weeks ago',
     

  //       },
        
  //       {
  //         hotAndNewBusinessImage: 'https://s3-media2.fl.yelpcdn.com/bphoto/3nn63PyytWDX3O7792-Tvg/l.jpg',
  //         hotAndNewBusinessLink:'/',
  //         hotAndNewBusinessName: 'Gourmonade ',
  //         reviewNumber: '12 reviews',
  //         reviewLocation: 'Juice Bars & Smoothies Mission',
  //         openedDays: 'Opened a few days ago',
    

  //       }
  //      ]
  //   }
  constructor(

    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  ) { }

  ngOnInit() {

  // collection
    this.businessCollection = this.afs.collection('businesses');
    this.businessObservable = this.businessCollection.valueChanges();
     this.businessObservable.subscribe(business => {
       console.log('business',business);
     })
  }

}
