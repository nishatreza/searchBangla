import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateJobsComponent } from './update-jobs.component';

describe('UpdateJobsComponent', () => {
  let component: UpdateJobsComponent;
  let fixture: ComponentFixture<UpdateJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
