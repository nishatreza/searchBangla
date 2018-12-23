import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarJobsComponent } from './similar-jobs.component';

describe('SimilarJobsComponent', () => {
  let component: SimilarJobsComponent;
  let fixture: ComponentFixture<SimilarJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
