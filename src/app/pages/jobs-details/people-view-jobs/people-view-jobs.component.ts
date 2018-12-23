import { Component, OnInit, Input} from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
import{AuthService} from '../../../core/auth.service'

@Component({
  selector: 'app-people-view-jobs',
  templateUrl: './people-view-jobs.component.html',
  styleUrls: ['./people-view-jobs.component.css']
})
export class PeopleViewJobsComponent implements OnInit {
  // @Input() similarJobsData;
  // @Input() jobData;

  
  public recentlyViewedCollection: AngularFirestoreCollection<any>;
  public recentlyViewedObservable: Observable<any[]>;



  // PeopleViewSimilarJobsData  =[{
  //   similarJobsImage: 'https://media.licdn.com/dms/image/C510BAQFPeC-ETQ4gIQ/company-logo_100_100/0?e=1543449600&v=beta&t=aFFX0_594RsoNagUOd0L-niE4pka0EIY6nJw_8BqY1A',
  //   similarJobsLink:'/',
  //   similarJobsTitle: 'Software Developer (Python)',
  //   similarJobsName: 'Paramount Resources Pte Ltd',
  //   similarJobsLocation: 'Singapore,Singapore' ,
  //   similarJobsDate:'',


  //     },
  //     {
  //       similarJobsImage: 'https://media.licdn.com/dms/image/C510BAQHpKxsqxdEWjg/company-logo_100_100/0?e=1543449600&v=beta&t=ylZD99qgCSVmtte7dpsMqaTDPIXC8R_LU0chzQrrkwI',
  //       similarJobsLink:'/',
  //       similarJobsTitle: 'Backend Developer ',
  //       similarJobsName: 'Acronis',
  //       similarJobsLocation: 'Singapore,Singapore ',
  //       similarJobsDate:'3 weeks ago',
   

  //     },
      
  //     {
  //       similarJobsImage: 'https://media.licdn.com/dms/image/C4E0BAQGomd-HrA3UZQ/company-logo_100_100/0?e=1543449600&v=beta&t=7l2F2Mc40XGNPtjo2jpyj_sa8Z7P9v4kJSRCp0O3-4s',
  //       similarJobsLink:'/',
  //       similarJobsTitle: 'SFDC Developer ',
  //       similarJobsName: 'K2 Partnering Solutions',
  //       similarJobsLocation: 'Bengalura Area,India ',
  //       similarJobsDate:'2 weeks ago',
  

  //     },

     
  
  //   ]
   
  PeopleViewJobsData  =[{
    viewImage: 'https://media.licdn.com/dms/image/C510BAQG_-FKtAS0Vpw/company-logo_100_100/0?e=1543449600&v=beta&t=_VpW3-vF2baDiYjUvPHsJ29Sb1E7Rf1V-1UiSWw_kTo',
    viewLink:'/',
    viewTitle: 'Python Developer ',
    viewName: 'Sophos',
    viewLocation: 'Bengalura Area,India ',
    viewDate:'2 weeks ago',


      },
      {
        viewImage: 'https://media.licdn.com/dms/image/C4D0BAQHzjpvyI_z3pA/company-logo_100_100/0?e=1543449600&v=beta&t=9AYscFtN-cdcQa8p20dV1aQKXG8GMqVu7o_gV1yGnng',
        viewLink:'/',
        viewTitle: 'Python Developer ',
        viewName: 'BPS World',
        viewLocation: 'London,United Kingdom ',
        viewDate:'2 weeks ago',
   

      },
      
      {
        viewImage: 'https://media.licdn.com/dms/image/C510BAQHaJ-IphlLorg/company-logo_100_100/0?e=1543449600&v=beta&t=pTXYsYS9bsMgFUd4_xvvrMAbwXKAc6OvkHO_k5cC6GU',
        viewLink:'/',
        viewTitle: ' Software Engineer',
        viewName: 'Aspire',
        viewLocation: 'Central Singapore',
        viewDate:'2 weeks ago',
  

      },

     
  
    ]
  
  
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
 
  ) { }

  ngOnInit() {

    this.recentlyViewedCollection = this.afs.collection('recentlyViewed');
this.recentlyViewedObservable = this.recentlyViewedCollection.valueChanges();
 this.recentlyViewedObservable.subscribe(recentlyview => {
   console.log('recently viewed',recentlyview);
 })
  }

}
