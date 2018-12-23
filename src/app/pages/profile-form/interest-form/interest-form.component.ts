import { Component,Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-interest-form',
  templateUrl: './interest-form.component.html',
  styleUrls: ['./interest-form.component.css']
})
export class InterestFormComponent implements OnInit {

  @Input() userData;
  uid: any;
  dragAreaClass:any;

  editMode: boolean;
  interestId: string; 

interestForm: FormGroup;

interestDescription: AbstractControl;
interestImage: AbstractControl;

  task: AngularFireUploadTask;
  percentage: Observable<number>;
  snapshot: Observable<any>;
  downloadURL: Observable<string>;
  isHovering: boolean;



  constructor(
    private fb: FormBuilder,
    public auth:AuthService,

    private storage: AngularFireStorage,
    private fsu: FireStoreUtilityService

  ) {


   }

  ngOnInit() {
    this.interestForm = this.fb.group({
      'interestDescription': ['', [Validators.required]],
      'interestImage': ['', [Validators.required]],
    
    
    });

    this.interestDescription = this.interestForm.controls['interestDescription'];
    this.interestImage = this.interestForm.controls['interestImage'];



    // if(this.userData){
    //   this.populateForm(this.userData);
    // }


  }
  onSubmit(interest){
    if(this.editMode){
      interest.uid = this.interestId;
      console.log('interest from edit ',interest)
      this.fsu.updateUserSubCollection(this.userData, 'interest', interest).then( ()=> {
        alert('Updated interest');
        }
      );
    } else {
      console.log(interest);
      interest.uid = this.fsu.createId();
      this.fsu.addToUserSubcollection(this.userData, 'interest', interest).then( ()=> {
        alert('added new interest');
      this.interestForm.reset();
        console.log ('added new interest');
        }
      )
    }
  }

}
