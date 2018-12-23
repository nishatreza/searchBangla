import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsPageComponent } from './jobs-page.component';

describe('JobsPageComponent', () => {
  let component: JobsPageComponent;
  let fixture: ComponentFixture<JobsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
