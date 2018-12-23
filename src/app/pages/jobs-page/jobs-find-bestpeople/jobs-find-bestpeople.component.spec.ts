import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsFindBestpeopleComponent } from './jobs-find-bestpeople.component';

describe('JobsFindBestpeopleComponent', () => {
  let component: JobsFindBestpeopleComponent;
  let fixture: ComponentFixture<JobsFindBestpeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsFindBestpeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsFindBestpeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
