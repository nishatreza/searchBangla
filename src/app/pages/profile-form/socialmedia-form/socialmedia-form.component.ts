import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../core/auth.service'
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';
import * as _ from "lodash";


@Component({
  selector: 'app-socialmedia-form',
  templateUrl: './socialmedia-form.component.html',
  styleUrls: ['./socialmedia-form.component.css']
})
export class SocialmediaFormComponent implements OnInit {
  loggedInUser: any;
  socialAccountForm: FormGroup;//social account form
  profilePageObservable: Observable<any[]>;
  public profilePageCollection: AngularFirestoreCollection<any>;
  pageData: any;

  accountandPersonalDataForm: FormGroup;//user personal info form
  public userPersonalInfoCollection: AngularFirestoreCollection<any> = this.afs.collection('users');
  userPersonalInfoObservable: Observable<any[]>;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private afs: AngularFirestore,
    public authService: AuthService
  ) {


  }

  ngOnInit() {
    this.setPageData();

    //social account form initialization
    this.socialAccountForm = this.fb.group({
      'googlePlusLink': [''],
      'linkedinLink': [''],
      'facebookLink': [''],
      'twitterLink': [''],
      'instagramLink': [''],
      'pinterestLink': [''],
      'youtubeLink': [''],
      'dribbleLink': [''],
      'behanceLink': [''],
      'vimeoLink': [''],
      /*   'email': [''] */
    });

  }
  setPageData() {
    this.profilePageCollection = this.afs.collection('users');
    this.profilePageObservable = this.profilePageCollection.valueChanges();
    this.profilePageObservable.subscribe(profilePageData => {
      this.pageData = profilePageData;
      console.log('this is page data', this.pageData);

    })

  }
  addSocialData() {

    this.socialAccountForm.reset();
  }
  addProfileData() {

    this.accountandPersonalDataForm.reset();

  }


  // onsubmit
  addSocialInfo(socialInfo: any) {
    console.log('social data', socialInfo);
    this.userPersonalInfoCollection.doc(this.authService.loggedInUser.uid).set({ socialInfo }, { merge: true })
      .then(() => {
        alert('Successfully updated social media info');
      this.socialAccountForm.reset();

        //  this.disableSocialModal();

      });
  }

  get googlePlusLink() { return this.socialAccountForm.get('googlePlusLink'); }
  get linkedinLink() { return this.socialAccountForm.get('linkedinLink'); }
  get facebookLink() { return this.socialAccountForm.get('facebookLink'); }
  get twitterLink() { return this.socialAccountForm.get('twitterLink'); }
  get instagramLink() { return this.socialAccountForm.get('instagramLink'); }
  get pinterestLink() { return this.socialAccountForm.get('pinterestLink'); }
  get youtubeLink() { return this.socialAccountForm.get('youtubeLink'); }
  get dribbleLink() { return this.socialAccountForm.get('dribbleLink'); }
  get behanceLink() { return this.socialAccountForm.get('behanceLink'); }
  get vimeoLink() { return this.socialAccountForm.get('vimeoLink'); }



}
