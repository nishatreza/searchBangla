import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
// storecollection
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AngularFireDatabase, AngularFireList }
  from 'angularfire2/database';
import 'firebase/firestore';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import * as _ from "lodash";
import{AuthService} from '../../../core/auth.service'


@Component({
  selector: 'app-add-business-form',
  templateUrl: './add-business-form.component.html',
  styleUrls: ['./add-business-form.component.css']
})
export class AddBusinessFormComponent implements OnInit {
  returnUrl: string;
  thumbnails = [];
    uid:string;
  // addbusiness = [];
  editMode: boolean;
  businessId: string; 

  addBusinessForm: FormGroup;
  // formarray
  menuItems: FormArray;
  
  name: AbstractControl;
  // thumbnail: AbstractControl;
  description: AbstractControl;
  address: AbstractControl;
  city: AbstractControl;
  cost: AbstractControl;
  country: AbstractControl;
  tax: AbstractControl;
  phone: AbstractControl;
  email: AbstractControl;
  businessType: AbstractControl;
  category: AbstractControl;

  // businessDays: AbstractControl;
  // businessTime: AbstractControl;
  //business hours
  monday:AbstractControl;
  tuesday:AbstractControl;
  wednesday:AbstractControl;
  thursday:AbstractControl;
  friday:AbstractControl;
  saturday:AbstractControl;
  sunday:AbstractControl;



  // for submit form console
  // users = [];
  // uid: string;
  // employees = [];
  public loading = false;
// declaring collection and observable
  public businessCollection: AngularFirestoreCollection<any>;
  public businessObservable: Observable<any[]>;

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    public authService:AuthService,

    // private af: AngularFireDatabase,
    private fb: FormBuilder
  ) { }

  // addInputField(){
  //   var div = document.getElementById('imgDiv');
  //   var input = '<input type="text" class="form-control" placeholder="Enter your business image" formControlName="thumbnail" style="margin: 15px 0;">';
  //   div.innerHTML = div.innerHTML + input;
  // }

  ngOnInit() {

    this.addBusinessForm = this.fb.group({
      'name': ['', [Validators.required]],
      // 'thumbnail': ['', [Validators.required]],
      'description': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'city': ['', Validators.required],
      'cost': ['', Validators.required],
      'country': ['', [Validators.required]],
      // 'tax': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'businessType': ['', [Validators.required]],
      'category': ['', [Validators.required]],

      'email': ['', [Validators.required,
        Validators.email

      ]],
      // formarray
      // menuItems: this.fb.array([ this.createItem() ]),
      // 'thumbnail': ['', [Validators.required]],
      // 'businessTime': ['', [Validators.required]],
  //business hours

      'businessHoursInfo': this.fb.group({
        'monday': ['', [
          Validators.required
    
        ]
        ],
        'tuesday': ['', [
          Validators.required
       
        ]
        ],

        'wednesday': ['', [

          Validators.required
        
        ]
        ],

        'thursday': ['', [

          Validators.required

        ]
        ],

        'friday': ['', [

          Validators.required
        
        ]
        ],

        'saturday': ['', [

          Validators.required
         
        ]
        ],

        'sunday': ['', [

          Validators.required

        ]
        ],

    
      },


      ),
 

    });
    

    this.name = this.addBusinessForm.controls['name'];
    // this.thumbnail = this.addBusinessForm.controls['thumbnail'];
    this.description = this.addBusinessForm.controls['description'];
    this.address = this.addBusinessForm.controls['address'];
    this.city = this.addBusinessForm.controls['city'];
    this.cost = this.addBusinessForm.controls['cost'];
    this.country = this.addBusinessForm.controls['country'];
    this.tax = this.addBusinessForm.controls['tax'];
    this.phone = this.addBusinessForm.controls['phone'];
    this.email = this.addBusinessForm.controls['email'];
    this.businessType = this.addBusinessForm.controls['businessType'];
    this.category = this.addBusinessForm.controls['category'];

    // this.businessDays = this.addBusinessForm.controls['businessDays'];
    // this.businessTime = this.addBusinessForm.controls['businessTime'];

    //  
this.monday = this.addBusinessForm.get('businessHoursInfo.monday');
this.tuesday = this.addBusinessForm.get('businessHoursInfo.tuesday');
this.wednesday = this.addBusinessForm.get('businessHoursInfo.wednesday');
this.thursday = this.addBusinessForm.get('businessHoursInfo.thursday');
this.friday = this.addBusinessForm.get('businessHoursInfo.friday');
this.saturday = this.addBusinessForm.get('businessHoursInfo.saturday');
this.sunday = this.addBusinessForm.get('businessHoursInfo.sunday');

    // for form submit
    this.businessCollection = this.afs.collection('businesses');
    this.businessObservable = this.businessCollection.valueChanges();
     this.businessObservable.subscribe(business => {
       console.log('business',business);
     })
       // go other url
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/business';  

  }
  // formarray
  // createItem(): FormGroup {
  //   return this.fb.group({
   
  //     'thumbnail': ['', [Validators.required]],

  //   });
  // }
  addItem(input): void {

    this.thumbnails.push(input.value);

    console.log(this.thumbnails);
    // this.menuItems = this.addBusinessForm.get('menuItems') as FormArray;
    // this.menuItems.push(this.createItem());
  }
  deleteItem(thumbnail): void {

 
  console.log('thumbnail',thumbnail);
  const filteredArray = this.thumbnails.filter(function(el){
    return el !== thumbnail;

  })
  this.thumbnails = filteredArray;
    // this.thumbnails.remove(input).then(_ => console.log('item deleted!'));
    // this.af.object('/input/' + input).remove();
    // this.thumbnails.push(input.value);
    // console.log(this.thumbnails);
    // this.menuItems = this.addBusinessForm.get('menuItems') as FormArray;
    // this.menuItems.push(this.createItem());
  }

// submit form in collection
  onSubmit(value) {
value.thumbnails = this.thumbnails;
console.log('thumbnail value',value);

    value.firestoreId = this.db.createId();
    this.db.collection('businesses').add(value).then(() => {
      alert('added business successfully');
      this.addBusinessForm.reset();
      console.log('addig to business  Requests');
    })



  }

 
}
