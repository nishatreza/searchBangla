import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDescriptionComponent } from './job-description.component';

describe('JobDescriptionComponent', () => {
  let component: JobDescriptionComponent;
  let fixture: ComponentFixture<JobDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
