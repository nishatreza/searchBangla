import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobsNavbarComponent } from './add-jobs-navbar.component';

describe('AddJobsNavbarComponent', () => {
  let component: AddJobsNavbarComponent;
  let fixture: ComponentFixture<AddJobsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
