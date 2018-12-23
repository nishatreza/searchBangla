import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsNavbarComponent } from './jobs-navbar.component';

describe('JobsNavbarComponent', () => {
  let component: JobsNavbarComponent;
  let fixture: ComponentFixture<JobsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
