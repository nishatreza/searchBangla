import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../../../core/auth.service';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-add-photos-modal',
  templateUrl: './add-photos-modal.component.html',
  styleUrls: ['./add-photos-modal.component.css'],
  providers: [NgbModal]
})
export class AddPhotosModalComponent implements OnInit {

  businessId;
  user: any;
  imgPath = [];
  filesArray = [];
  filesDbUrl = [];

  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  downloadUrl: Observable<string>;

  constructor(
    private modalService: NgbModal,
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu: FireStoreUtilityService,
    private afStorage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder,
    public auth: AuthService,
  ) { }

  ngOnInit() {
    // get the user data
    this.auth.user.subscribe(user => {
      this.user = user;
      console.log('user data from review modal', this.user);
    });
    // get the business ID
    this.businessId = this.route.snapshot.params['id'];
    console.log('business id ', this.businessId);
  }

  open(content) {
    this.modalService.open(content);
  }

  fileToUpload(event) {
    // console.log('event', event.target.files[0]);
    this.filesArray.push(event.target.files[0]);
    // console.log('filesArray', this.filesArray[0]);

    var reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]); // read file as data url
    reader.onload = (event: any) => { // called once readAsDataURL is completed
      this.imgPath.push(event.target.result);
    }
  }

  upload() {
    for (var i = 0; i <= this.imgPath.length - 1; i++) {
      const id = Math.random().toString(36).substring(2);
      this.ref = this.afStorage.ref(`business_images/${id}`);
      this.task = this.ref.put(this.filesArray[i]);
      // this.ref.getDownloadURL().do(url => {
      //   console.log('this.ref', url);
      // })

      this.task.snapshotChanges().pipe(
        finalize(() => {
          this.ref.getDownloadURL().subscribe(url => {
            this.task = null;
            this.filesDbUrl.push(url);
            console.log('filesDbUrl', this.filesDbUrl);
          });
        })
      ).subscribe();
    }
    alert('images uploaded succesfully!');
  }

}
