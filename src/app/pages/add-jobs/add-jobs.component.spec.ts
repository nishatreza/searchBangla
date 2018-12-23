import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddJobsComponent } from './add-jobs.component';

describe('AddJobsComponent', () => {
  let component: AddJobsComponent;
  let fixture: ComponentFixture<AddJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
