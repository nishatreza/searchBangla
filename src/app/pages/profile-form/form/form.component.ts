import { Component,Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  

  @Input() userData;
  uid: any;
  dragAreaClass:any;

  editMode: boolean;
// ex
experienceId: string; 

  profileForm: FormGroup;

  // userName: AbstractControl;
  // lastName: AbstractControl;
  // userEmail: AbstractControl;
  phone: AbstractControl;
  freelanceDate: AbstractControl;
  address: AbstractControl;
  age: AbstractControl;
  status: AbstractControl;
  bio: AbstractControl;


  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;

 
  // hobbyInterest: AbstractControl;

  projectTitle: AbstractControl;
  projectBrief: AbstractControl;
  currentStage: AbstractControl;
  projectProgression: AbstractControl;
  projectId: any;


  constructor(
    
    private fb: FormBuilder,
    public auth:AuthService,

    private storage: AngularFireStorage,
    private fsu: FireStoreUtilityService
  ) {
    this.setUid();
    
    
   }

  ngOnInit() {
    
    this.profileForm = this.fb.group({
      // 'userName': ['', [Validators.required]],
      // 'lastName': ['', [Validators.required]],
      // 'userEmail': ['', [Validators.required]],
      'phone': ['', [Validators.required]],
      'freelanceDate': ['', [Validators.required]],
      'address': ['', [Validators.required]],
      'age': ['', [Validators.required]],
      'status': ['', [Validators.required]],
      'bio': ['', [Validators.required]],

 // 'hobbyInterest': ['', [Validators.required]],
    
    });

    // this.userName = this.profileForm.controls['userName'];
    // this.lastName = this.profileForm.controls['lastName'];
    // this.userEmail = this.profileForm.controls['userEmail'];
    this.phone = this.profileForm.controls['phone'];
    this.freelanceDate = this.profileForm.controls['freelanceDate'];
    this.address = this.profileForm.controls['address'];
    this.age = this.profileForm.controls['age'];
    this.status = this.profileForm.controls['status'];
    this.bio = this.profileForm.controls['bio'];



    if(this.userData){
      this.populateForm(this.userData);
    }


    // this.aboutYou = this.profileForm.controls['aboutYou'];
    // this.hobbyInterest = this.profileForm.controls['hobbyInterest'];

  

  }
  
  setUid(){
    this.auth.user.subscribe(user => {
      this.uid = user.uid
      console.log('user data from form component',this.uid);
    })
   }
  populateForm(userData){
    // this.userName.setValue(userData.displayName);
    // this.lastName.setValue(userData.lastName);
    // this.userEmail.setValue(userData.email);
    this.phone.setValue(userData.phone);
    this.freelanceDate.setValue(userData.freelanceDate);
    this.address.setValue(userData.address);
    this.age.setValue(userData.age);
    this.status.setValue(userData.status);

  }
  onSubmit(value){

    console.log('updated  profile ',value);
    this.fsu.updateUserData(this.uid, value).then(()=>{
      alert('Successfully updated profile.');
      this.profileForm.reset();

      console.log('updated user profile');
    });
    //    this.authService.emailSignUp(userForm).then( user => {

    //      this.router.navigateByUrl(this.returnUrl);
    //    }).catch( error => {
    //      this.errorMessage = error.message;
       
    //    });
    //  }  
    
  }




}
