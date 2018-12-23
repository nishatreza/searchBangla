import { Component, OnInit } from '@angular/core';
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
@Component({
  selector: 'app-add-news-form',
  templateUrl: './add-news-form.component.html',
  styleUrls: ['./add-news-form.component.css']
})
export class AddNewsFormComponent implements OnInit {
  returnUrl: string;
  editMode: boolean;
  jobsId: string; 
// new for upload
task: AngularFireUploadTask;

percentage: Observable<number>;
snapshot: Observable<any>;
downloadURL: Observable<string>;
// end upload
  addNewsForm: FormGroup;

  newsTitle: AbstractControl;
  videosTitle: AbstractControl;
  imageTitle: AbstractControl;
  descriptionTitle: AbstractControl;
  newsDescription: AbstractControl;
  topNewsDescription: AbstractControl;
  thumbnail: AbstractControl;
  topNewsThumbnail: AbstractControl;
  reporterName: AbstractControl;
  newsCategory: AbstractControl;
  newsFile: AbstractControl;
  public loading = false;
  // declaring collection and observable
    public newsCollection: AngularFirestoreCollection<any>;
    public newsObservable: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
  
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.addNewsForm = this.fb.group({
      'newsTitle': ['', [Validators.required]],
      'videosTitle': ['', [Validators.required]],
      'imageTitle': ['', [Validators.required]],
      'descriptionTitle': ['', [Validators.required]],
      'newsDescription': ['', [Validators.required]],
      'thumbnail': ['', [Validators.required]],
      'topNewsDescription': ['', [Validators.required]],
      'topNewsThumbnail': ['', [Validators.required]],
      'reporterName': ['', [Validators.required]],
      'newsCategory': ['', Validators.required],
      'newsFile': ['', [Validators.required]],
      // 'role': ['', [Validators.required]],
      // 'location': ['', [Validators.required]],
      // 'hearFrom': ['', [Validators.required]],
  
    });
  

    this.newsTitle = this.addNewsForm.controls['newsTitle'];
      
    this.videosTitle = this.addNewsForm.controls['videosTitle'];
    this.imageTitle = this.addNewsForm.controls['imageTitle'];
    this.descriptionTitle = this.addNewsForm.controls['descriptionTitle'];
    this.newsDescription = this.addNewsForm.controls['newsDescription'];
    this.thumbnail = this.addNewsForm.controls['thumbnail'];
    this.topNewsDescription = this.addNewsForm.controls['topNewsDescription'];
    this.topNewsThumbnail = this.addNewsForm.controls['topNewsThumbnail'];
    this.reporterName = this.addNewsForm.controls['reporterName'];
    this.newsCategory = this.addNewsForm.controls['newsCategory'];
    this.newsFile = this.addNewsForm.controls['newsFile'];
      
    // for form submit
    this.newsCollection = this.afs.collection('news');
    this.newsObservable = this.newsCollection.valueChanges();
     this.newsObservable.subscribe(news => {
       console.log('news',news);
     })
       // go other url
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/show-news';  

  
  }
  // submit form in collection
  onSubmit(value) {
    
        value.firestoreId = this.db.createId();
        this.db.collection('news').add(value).then(() => {
          alert('added news successfully');
      this.addNewsForm.reset();
        
          console.log('addig to news  Requests');
        })
    
    
    
      }

      
  startUpload(event: FileList) {

    const file = event.item(0)
    if (file.type.split('/')[0] !== 'image') { 
      console.error('unsupported file type :( ')
      return;
    }
    const path = `test/${new Date().getTime()}_${file.name}`;
    const customMetadata = { app: 'My AngularFire-powered PWA!' };
    this.task = this.storage.upload(path, file, { customMetadata })
    this.percentage = this.task.percentageChanges();
    this.snapshot   = this.task.snapshotChanges()
    // this.downloadURL = this.task.downloadURL(); 
  }

  isActive(snapshot) {
    return snapshot.state === 'running' && snapshot.bytesTransferred < snapshot.totalBytes
  }

}
