import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobsFormComponent } from './update-jobs-form.component';

describe('UpdateJobsFormComponent', () => {
  let component: UpdateJobsFormComponent;
  let fixture: ComponentFixture<UpdateJobsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJobsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
