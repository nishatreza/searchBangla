import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobsFormComponent } from './add-jobs-form.component';

describe('AddJobsFormComponent', () => {
  let component: AddJobsFormComponent;
  let fixture: ComponentFixture<AddJobsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
