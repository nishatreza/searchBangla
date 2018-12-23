import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';

import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";


@Component({
  selector: 'app-show-business-form',
  templateUrl: './show-business-form.component.html',
  styleUrls: ['./show-business-form.component.css']
})
export class ShowBusinessFormComponent implements OnInit {
  addBusinessForm: FormGroup;
  editMode: boolean;

  name: AbstractControl;
  address: AbstractControl;
  city: AbstractControl;
  country: AbstractControl;
  tax: AbstractControl;
  phone: AbstractControl;
  email: AbstractControl;
  businessHours: AbstractControl;
  public loading = false;

  public addbusinessCollection: AngularFirestoreCollection<any>;
  public addbusinessObservable: Observable<any[]>;
  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder

  ) { }

  ngOnInit() {
    
    this.addBusinessForm = this.fb.group({
      'name': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'city': ['', Validators.required],
      'country': ['', [Validators.required]],
      'tax': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'email': ['', [Validators.required]],
      'businessHours': ['', [Validators.required]],

    });

    this.name = this.addBusinessForm.controls['name'];
    this.address = this.addBusinessForm.controls['address'];
    this.city = this.addBusinessForm.controls['city'];
    this.country = this.addBusinessForm.controls['country'];
    this.tax = this.addBusinessForm.controls['tax'];
    this.phone = this.addBusinessForm.controls['phone'];
    this.email = this.addBusinessForm.controls['email'];
    this.businessHours = this.addBusinessForm.controls['businessHours'];

       // for form submit
       this.addbusinessCollection = this.afs.collection('addbusiness');
       this.addbusinessObservable = this.addbusinessCollection.valueChanges();
        this.addbusinessObservable.subscribe(addbusiness => {
          console.log('addbusiness',addbusiness);
        })
  }
  // functions

// deleteBusiness(business){
//   console.log('delete business', business);
//   this.fsu.removeFromUserSubCollection(this.user, 'business', business);
// }

// editBusiness(business){
//   this.editMode = true;
//   this.name.setValue(business.name)
//   this.address.setValue(business.address)
//  this.city.setValue(business.city)
//   this.country.setValue(business.country)
//   this.tax.setValue(business.tax)
//   this.phone.setValue(business.phone)
//   this.email.setValue(business.email)
//   this.businessHours.setValue(business.businessHours)
//   this.businessId = business.fireStoreId;

// }

}
