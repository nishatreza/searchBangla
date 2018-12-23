import { Component,Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { Observable } from 'rxjs/Observable';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { FireStoreUtilityService } from '../../../shared/services/fire-store-utility.service';
import {AuthService} from '../../../core/auth.service';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css']
})
export class ProjectFormComponent implements OnInit {
  @Input() userData;
  uid: any;
  editMode: boolean;
  projectForm: FormGroup;

  projectTitle: AbstractControl;
  projectBrief: AbstractControl;
  projectStatus: AbstractControl;
  projectStageTopic: AbstractControl;
  projectPercentage: AbstractControl;
  projectDate: AbstractControl;
  projectTime: AbstractControl;

  

  
  projectId: string;
  constructor(
    private fb: FormBuilder,
    public auth:AuthService,

    private storage: AngularFireStorage,
    private fsu: FireStoreUtilityService
  ) { }

  ngOnInit() {
    this.projectForm = this.fb.group({
      'projectTitle': ['', [Validators.required]],
      'projectBrief': ['', [Validators.required]],
      'projectStatus': ['', [Validators.required]],
      'projectStageTopic': ['', [Validators.required]],
      'projectPercentage': ['', [Validators.required]],
      'projectDate': ['', [Validators.required]],
      'projectTime': ['', [Validators.required]],

    });

    this.projectTitle = this.projectForm.controls['projectTitle'];
    this.projectBrief = this.projectForm.controls['projectBrief'];
    this.projectStatus = this.projectForm.controls['projectStatus'];
    this.projectStageTopic = this.projectForm.controls['projectStageTopic'];
    this.projectPercentage = this.projectForm.controls['projectPercentage'];
    this.projectDate = this.projectForm.controls['projectDate'];
    this.projectTime = this.projectForm.controls['projectTime'];


  }
  onSubmit(project){
    if(this.editMode){
      project.uid = this.projectId;
      console.log('project from edit ',project)
      this.fsu.updateUserSubCollection(this.userData, 'project', project).then( ()=> {
        alert('Updated project');
        }
      );
    } else {
      console.log(project);
      project.uid = this.fsu.createId();
      this.fsu.addToUserSubcollection(this.userData, 'project', project).then( ()=> {
        alert('added new project');
      this.projectForm.reset();
        console.log ('added new project');
        }
      )
    }
  }

}
