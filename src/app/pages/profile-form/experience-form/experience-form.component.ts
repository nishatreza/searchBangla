import { Component,Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-experience-form',
  templateUrl: './experience-form.component.html',
  styleUrls: ['./experience-form.component.css']
})
export class ExperienceFormComponent implements OnInit {
  @Input() userData;
  uid: any;
  editMode: boolean;
  experienceId: string;

  experienceForm: FormGroup;

  company: AbstractControl;
  jobTitle: AbstractControl;
  startDate: AbstractControl;
  endDate: AbstractControl;
  description: AbstractControl;


  constructor(
    private fb: FormBuilder,
    public auth:AuthService,

    private storage: AngularFireStorage,
    private fsu: FireStoreUtilityService
  ) { }

  ngOnInit() {
        this.experienceForm = this.fb.group({
      'company': ['', [Validators.required]],
      'jobTitle': ['', [Validators.required]],
      'startDate': ['', [Validators.required]],
      'endDate': ['', [Validators.required]],
      'description': ['', [Validators.required]],

    });

    this.company = this.experienceForm.controls['company'];
    this.jobTitle = this.experienceForm.controls['jobTitle'];
    this.startDate = this.experienceForm.controls['startDate'];
    this.endDate = this.experienceForm.controls['endDate'];
    this.description = this.experienceForm.controls['description'];

  }

  onSubmit(experience:any){
    if(this.editMode){
      experience.uid = this.experienceId;
      console.log('experience from edit ',experience)
      this.fsu.updateUserSubCollection(this.userData, 'experience', experience).then( ()=> {
        alert('Updated experience');
        }
      );
    } else {
      console.log(experience);
      experience.uid = this.fsu.createId();
      this.fsu.addToUserSubcollection(this.userData, 'experience', experience).then( ()=> {
        alert('added new experience');
        console.log ('added new experience');
        }
      )
    }
  }

}
