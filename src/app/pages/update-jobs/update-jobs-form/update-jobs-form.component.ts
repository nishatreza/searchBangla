import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';

@Component({
  selector: 'app-update-jobs-form',
  templateUrl: './update-jobs-form.component.html',
  styleUrls: ['./update-jobs-form.component.css']
})
export class UpdateJobsFormComponent implements OnInit {

  editMode: boolean;
  jobsId: string; 

  updateJobsForm: FormGroup;

  companyName: AbstractControl;
  companySize: AbstractControl;
  name: AbstractControl;
  phone: AbstractControl;
  role: AbstractControl;
  location: AbstractControl;
  hearFrom: AbstractControl;

  constructor(
    private fsu:FireStoreUtilityService,
  
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.updateJobsForm = this.fb.group({
      'companyName': ['', [Validators.required]],
      'companySize': ['', [Validators.required]],
      'name': ['', Validators.required],
      'phone': ['', [Validators.required]],
      'role': ['', [Validators.required]],
      'location': ['', [Validators.required]],
      'hearFrom': ['', [Validators.required]],
  
    });
  
    this.companyName = this.updateJobsForm.controls['companyName'];
    this.companySize = this.updateJobsForm.controls['companySize'];
    this.name = this.updateJobsForm.controls['name'];
    this.phone = this.updateJobsForm.controls['phone'];
    this.role = this.updateJobsForm.controls['role'];
    this.location = this.updateJobsForm.controls['location'];
    this.hearFrom = this.updateJobsForm.controls['hearFrom'];
  
  }

}
