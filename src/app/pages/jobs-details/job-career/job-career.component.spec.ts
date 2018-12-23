import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobCareerComponent } from './job-career.component';

describe('JobCareerComponent', () => {
  let component: JobCareerComponent;
  let fixture: ComponentFixture<JobCareerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobCareerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobCareerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
