import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleViewJobsComponent } from './people-view-jobs.component';

describe('PeopleViewJobsComponent', () => {
  let component: PeopleViewJobsComponent;
  let fixture: ComponentFixture<PeopleViewJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleViewJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleViewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
