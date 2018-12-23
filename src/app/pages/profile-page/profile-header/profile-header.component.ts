
import { Component, OnInit, Input, OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import  { equal } from 'assert';
// import { ResumePage } from '../../../shared/models/resumePage';
import { AuthService } from '../../../core/auth.service';
import { User } from '../../../shared/models/user';

import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Observable } from 'rxjs/Observable';
// import { NgxPaginationModule } from 'ngx-pagination';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import { finalize } from 'rxjs/operators';


@Component({
  selector: 'app-profile-header',
  templateUrl: './profile-header.component.html',
  styleUrls: ['./profile-header.component.css']
})
export class ProfileHeaderComponent implements OnInit {
  @Input() userData;
  uid: string;
  user:User;
  
  ref: AngularFireStorageReference;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  downloadURL: Observable<string>;
  public usersCollection: AngularFirestoreCollection<any> = this.db.collection('users');
  offset = 10;
  defaultImage = "https://lh6.googleusercontent.com/-zHrU7a42acU/AAAAAAAAAAI/AAAAAAAABk4/aPDn3J3Htv4/photo.jpg";
  imageurl: any;
  imgPath: any;
  // file: any;
  imagesDbUrl: any;

  constructor(
    public auth: AuthService,
    
    private afs: AngularFirestore,
    private route: ActivatedRoute, 
    private storage: AngularFireStorage,
    private db: AngularFirestore,
   
    private router: Router
  ) {


   }

  ngOnInit() {
    window.scrollTo(0,0);
// get the user data
this.auth.user.subscribe(user => {
  this.uid = user.uid;
  console.log('uid from user', this.uid);
});
  }
  uploadPic(event) {
    const file = event.target.files[0];

    const id = Math.random().toString(36).substring(2);
    this.ref = this.storage.ref(`profile_thumbnails/${id}`);
    this.task = this.ref.put(file);
    this.task.snapshotChanges().pipe(
      finalize(() => {
        this.ref.getDownloadURL().subscribe(url => {
          this.imageurl = url;
      this.updateProfilePic(this.imageurl);
      console.log('uploaded url',this.uid);

        

          this.task = null;
         
        });
      })
    ).subscribe();
   
  }
  updateProfilePic(url){

    this.usersCollection.doc(this.uid).update({photoURL:url})
    .then(()=>{
         console.log('uploaded photo',this.uid);

    });
 
  }

}
