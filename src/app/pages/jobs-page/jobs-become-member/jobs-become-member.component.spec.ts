import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsBecomeMemberComponent } from './jobs-become-member.component';

describe('JobsBecomeMemberComponent', () => {
  let component: JobsBecomeMemberComponent;
  let fixture: ComponentFixture<JobsBecomeMemberComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsBecomeMemberComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsBecomeMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
