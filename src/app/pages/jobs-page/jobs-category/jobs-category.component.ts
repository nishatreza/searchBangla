import { Component, OnInit } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
@Component({
  selector: 'app-jobs-category',
  templateUrl: './jobs-category.component.html',
  styleUrls: ['./jobs-category.component.css']
})
export class JobsCategoryComponent implements OnInit {
  public isCollapsed = true;
  offset=10;
  defaultImage="https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";
  public jobsCollection: AngularFirestoreCollection<any>;
  public jobsObservable: Observable<any[]>;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private storage: AngularFireStorage,
    private db: AngularFirestore,

  ) { }

  ngOnInit() {
        // collection
        this.jobsCollection = this.afs.collection('jobs');
        this.jobsObservable = this.jobsCollection.valueChanges();
         this.jobsObservable.subscribe(jobs => {
           console.log('jobs',jobs);
         })
  }

  jobsCategory  = [{
    categoryTitle: 'Software Engineer',
    categoryImage: '../../../assets/images/software-Engineer.png',
    categoryLink:'software-engineer',
  },{
    categoryTitle: 'Web Developer',
    categoryImage: '../../../assets/images/Web-developper.png',
    categoryLink:'web-developer',
  },{
    categoryTitle: 'Database Administrator',
    categoryImage: '../../../assets/images/Database-Administrator.png',
    categoryLink:'database-administrator',
  },{
    categoryTitle: 'Software Quality Analyst',
    categoryImage: '../../../assets/images/Software-quality-Analyst.png',
    categoryLink:'software-quality-analyst',
  },{
    categoryTitle: 'Graphics Designer',
    categoryImage: '../../../assets/images/graphic-Designer.png',
    categoryLink:'graphics-designer',
  },{
    categoryTitle: 'Android & IOS Developer',
    categoryImage: '../../../assets/images/Android-and-Ios-Developer.png',
    categoryLink:'android-and-ios-developer',
  },{
    categoryTitle: 'Web Designer',
    categoryImage: '../../../assets/images/web-designer.png',
    categoryLink:'web-designer',
  },
  // {
  //   categoryTitle: 'More Categories',
  //   categoryImage: '../../../assets/images/more-category.png',
  //   categoryLink:'/',
  // }
  ]
  jobsMoreCategories =
  {
 
    categoryLink:['digital-marketing',
    'assistant-manager',
    'integration-engineer',
    'railway-engineer',
    'production-officer',
    'businessplanning-officer',
    'business-analyst',
    'assistant-construction-engineer',
    'social-media-marketing',
    'finance-assistant',
    'executive-counsellor',
    'hr-officer',
    'receptionist',
    'business-development-specialist',
    'production-officer',
   'reporter'
   
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
