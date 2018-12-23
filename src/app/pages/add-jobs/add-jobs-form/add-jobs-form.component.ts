import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
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
  selector: 'app-add-jobs-form',
  templateUrl: './add-jobs-form.component.html',
  styleUrls: ['./add-jobs-form.component.css']
})
export class AddJobsFormComponent implements OnInit {

  public inputArray : Array<any> = [];

  returnUrl: string;
  requirements = [];

  editMode: boolean;
  jobsId: string; 

  addJobsForm: FormGroup;
  items: FormArray;

  title: AbstractControl;
  comName: AbstractControl;
  ComLocation: AbstractControl;
  category: AbstractControl;
  // jobFun: AbstractControl;
  employType: AbstractControl;
  // comIndustry: AbstractControl;
  // seniority: AbstractControl;
  description: AbstractControl;
  thumbnail:AbstractControl;
  jobRequirements:AbstractControl;

  // salaryRange:AbstractControl;
  // jobRequirements:AbstractControl;

  
  // jobListingTitle: AbstractControl;
  // listingDescription: AbstractControl;
  // joblistingimage:AbstractControl;
  public loading = false;
  // declaring collection and observable
    public jobsCollection: AngularFirestoreCollection<any>;
    public jobsObservable: Observable<any[]>;
  

  constructor(
    private afs: AngularFirestore,
    private route: ActivatedRoute,
    private fsu:FireStoreUtilityService,
    private storage: AngularFireStorage,
    private db: AngularFirestore,
    private fb: FormBuilder
  ) { }

  
  ngOnInit() {
    this.addJobsForm = this.fb.group({
      'title': ['', [Validators.required]],
      'comName': ['', [Validators.required]],
      'ComLocation': ['', [Validators.required]],
      'category': ['', [Validators.required]],
      // 'jobFun': ['', [Validators.required]],
      'employType': ['', [Validators.required]],
      'jobRequirements': ['', [Validators.required]], 
      // 'comIndustry': ['', [Validators.required]], 
      // 'seniority': ['', [Validators.required]], 
      'description': ['', [Validators.required]], 
      'thumbnail': ['', [Validators.required]],
      // 'salaryRange': ['', [Validators.required]],
      // 'jobRequirements': ['', [Validators.required]],

      
    //   'jobListingTitle': ['', [Validators.required]],
    //   'listingDescription': ['', [Validators.required]],
    //  'joblistingimage': ['', [Validators.required]],

    });
  
    this.title = this.addJobsForm.controls['title'];
    this.comName = this.addJobsForm.controls['comName'];
    this.ComLocation = this.addJobsForm.controls['ComLocation'];
    this.category = this.addJobsForm.controls['category'];
    // this.jobFun = this.addJobsForm.controls['jobFun'];
    this.employType = this.addJobsForm.controls['employType'];  
    this.jobRequirements = this.addJobsForm.controls['jobRequirements'];  
    // this.comIndustry = this.addJobsForm.controls['comIndustry'];  
    // this.seniority = this.addJobsForm.controls['seniority'];
    this.description = this.addJobsForm.controls['description'];
    this.thumbnail = this.addJobsForm.controls['thumbnail'];
    // this.salaryRange = this.addJobsForm.controls['salaryRange'];
    // this.jobListingTitle = this.addJobsForm.controls['jobListingTitle'];
    // this.listingDescription = this.addJobsForm.controls['listingDescription'];
    // this.joblistingimage = this.addJobsForm.controls['joblistingimage'];
    // this.joblistingimage = this.addJobsForm.controls['joblistingimage'];
    // this.jobRequirements = this.addJobsForm.controls['jobRequirements'];


      
    // for form submit
    this.jobsCollection = this.afs.collection('jobs');
    this.jobsObservable = this.jobsCollection.valueChanges();
     this.jobsObservable.subscribe(jobs => {
       console.log('jobs',jobs);
     })
       // go other url
    // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/show-jobs';  

  }

  addItem(input): void {

  
    this.requirements.push(input.value);
     
    console.log('requirements',this.requirements);
    // alert('clear it and add more requirements');
   
  }
  onSubmit(value) {

    value.requirements = this.requirements;

    value.firestoreId = this.db.createId();
    this.db.collection('jobs').add(value).then(() => {
      alert('added jobs successfully');
      this.addJobsForm.reset();
    
      console.log('addig to jobs  Requests',value);
    })



  }

}
