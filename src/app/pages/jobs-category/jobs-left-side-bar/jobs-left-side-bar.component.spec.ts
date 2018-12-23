import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsLeftSideBarComponent } from './jobs-left-side-bar.component';

describe('JobsLeftSideBarComponent', () => {
  let component: JobsLeftSideBarComponent;
  let fixture: ComponentFixture<JobsLeftSideBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsLeftSideBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsLeftSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
