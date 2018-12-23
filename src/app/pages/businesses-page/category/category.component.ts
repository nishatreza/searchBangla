import { Component, OnInit, Input } from '@angular/core';
import { BusinessesPage } from '../../../shared/models/businessesPage';
// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public isCollapsed = true;
  public businessCollection: AngularFirestoreCollection<any>;
  public businessObservable: Observable<any[]>;
  offset = 10;
  defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";



  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
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


  // mockdata

  
  businessCategory  = [{
      categoryTitle: 'Restaurants',
      categoryImage: '../../../assets/images/Restaurant-icon.png',
    categoryLink:'restaurants',
    },
    {
      categoryTitle: 'Shopping',
      categoryImage: '../../../assets/images/Shopping.png',
    categoryLink:'shopping',
    },
    {
      categoryTitle: 'Nightlife',
      categoryImage: '../../../assets/images/Nightlife.png',
    categoryLink:'nightlife',
    },
    {
      categoryTitle: 'Active Life',
      categoryImage: '../../../assets/images/active-life.png',
    categoryLink:'active-life',
    },
    {
      categoryTitle: 'Beauty & Spas',
      categoryImage: '../../../assets/images/beauty-and-spa.png',
    categoryLink:'beauty-spas',
    },
    {
      categoryTitle: 'Automotive',
      categoryImage: '../../../assets/images/automotive.png',
    categoryLink:'automotive',
    },
    {
      categoryTitle: 'Home Services',
      categoryImage: '../../../assets/images/homeservice.png',
    categoryLink:'home-services',
    },
    // {
    //   categoryTitle: 'More Categories',
    //   categoryImage: '../../../assets/images/more-category.png',
    // categoryLink:'/',
    // }

  ]

  businessMoreCategories = 
{

categoryLink:['coffee-tea',
'food',
'arts-entertainment',
'health-medical',
'professional-services',
'pets',
'real-estate',
'hotels-travel',
'local-services',
'event-planning-services',
'public-services-gov',
'financial-services',
'education',
'religious-organizations',
'local-flavor',
'mass-media'

]

}
// {
// categoryLink:'food'

// },

// {
// categoryLink:'arts-entertainment'

// },
// {
// categoryLink:'health-medical'

// },
// {
// categoryLink:'professional-services'

// },
// {
// categoryLink:'pets'

// },
// {
// categoryLink:'real-estate'

// },
// {
// categoryLink:'hotels-travel'

// },
// {
// categoryLink:'local-services'

// },
// {
// categoryLink:'event-planning-services'

// },
// {
// categoryLink:'public-services-gov'

// },
// {
// categoryLink:'financial-services'

// },
// {
// categoryLink:'education'

// },
// {
// categoryLink:'religious-organizations'

// },
// {
// categoryLink:'local-flavor'

// },
// {
// categoryLink:'mass-media'

// }
  

  
  




}
