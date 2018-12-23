import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';

@Component({
  selector: 'app-update-news-form',
  templateUrl: './update-news-form.component.html',
  styleUrls: ['./update-news-form.component.css']
})
export class UpdateNewsFormComponent implements OnInit {

  editMode: boolean;
  jobsId: string; 

  updateNewsForm: FormGroup;

  newsTitle: AbstractControl;
  newsDescription: AbstractControl;
  newsCategory: AbstractControl;
  newsFile: AbstractControl;

  constructor(
    private fsu:FireStoreUtilityService,
  
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.updateNewsForm = this.fb.group({
      'newsTitle': ['', [Validators.required]],
      'newsDescription': ['', [Validators.required]],
      'newsCategory': ['', Validators.required],
      'newsFile': ['', [Validators.required]],
      'role': ['', [Validators.required]],
      'location': ['', [Validators.required]],
      'hearFrom': ['', [Validators.required]],
  
    });
  
    this.newsTitle = this.updateNewsForm.controls['newsTitle'];
    this.newsDescription = this.updateNewsForm.controls['newsDescription'];
    this.newsCategory = this.updateNewsForm.controls['newsCategory'];
    this.newsFile = this.updateNewsForm.controls['newsFile'];
  
  }

}
