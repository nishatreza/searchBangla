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
  selector: 'app-update-business-form',
  templateUrl: './update-business-form.component.html',
  styleUrls: ['./update-business-form.component.css']
})
export class UpdateBusinessFormComponent implements OnInit {
// @Input() user;
returnUrl: string;

editMode: boolean;
businessId: string; 

updateBusinessForm: FormGroup;

name: AbstractControl;
address: AbstractControl;
city: AbstractControl;
country: AbstractControl;
tax: AbstractControl;
phone: AbstractControl;
email: AbstractControl;
businessHours: AbstractControl;

public loading = false;
// declaring collection and observable
  public updatebusinessCollection: AngularFirestoreCollection<any>;
  public updatebusinessObservable: Observable<any[]>;

constructor(
  private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,

    private fb: FormBuilder
) { }

ngOnInit() {

  this.updateBusinessForm = this.fb.group({
    'name': ['', [Validators.required]],
    'address': ['', [Validators.required]],
    'city': ['', Validators.required],
    'country': ['', [Validators.required]],
    'tax': ['', [Validators.required]],
    'phone': ['', [Validators.required]],
    'email': ['', [Validators.required]],
    'businessHours': ['', [Validators.required]],

  });

  this.name = this.updateBusinessForm.controls['name'];
  this.address = this.updateBusinessForm.controls['address'];
  this.city = this.updateBusinessForm.controls['city'];
  this.country = this.updateBusinessForm.controls['country'];
  this.tax = this.updateBusinessForm.controls['tax'];
  this.phone = this.updateBusinessForm.controls['phone'];
  this.email = this.updateBusinessForm.controls['email'];
  this.businessHours = this.updateBusinessForm.controls['businessHours'];

      // for form submit
      this.updatebusinessCollection = this.afs.collection('updatebusiness');
      this.updatebusinessObservable = this.updatebusinessCollection.valueChanges();
       this.updatebusinessObservable.subscribe(updatebusiness => {
         console.log('updatebusiness',updatebusiness);
       })
         // go other url
      this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/show-business';  
  
}



// functions
// submit form in collection
onSubmit(value) {

  value.requestId = this.db.createId();
  this.db.collection('updatebusiness').add(value).then(() => {
    alert('updated business successfully');
  
    console.log('updating to business  Requests');
  })



}

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


// onSubmit(business){
//   if(this.editMode){
//     business.fireStoreId = this.businessId;
//     console.log('business from edit ',business)
//     this.fsu.updateUserSubCollection(this.user, 'business', business).then( ()=> {
//       alert('Updated business');

//       }
//     );
//   } else {
//     console.log(business);
//     business.fireStoreId = this.fsu.createId();
//     this.fsu.addToUserSubcollection(this.user, 'business', business).then( ()=> {
//       alert('added new business');

//       console.log ('added new business');
//       }
//     )
//   }
// }


}
