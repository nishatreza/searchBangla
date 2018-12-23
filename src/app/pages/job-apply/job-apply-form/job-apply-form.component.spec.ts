import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApplyFormComponent } from './job-apply-form.component';

describe('JobApplyFormComponent', () => {
  let component: JobApplyFormComponent;
  let fixture: ComponentFixture<JobApplyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobApplyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobApplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
