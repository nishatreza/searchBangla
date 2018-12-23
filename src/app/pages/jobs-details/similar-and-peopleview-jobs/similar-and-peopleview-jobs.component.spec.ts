import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarAndPeopleviewJobsComponent } from './similar-and-peopleview-jobs.component';

describe('SimilarAndPeopleviewJobsComponent', () => {
  let component: SimilarAndPeopleviewJobsComponent;
  let fixture: ComponentFixture<SimilarAndPeopleviewJobsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SimilarAndPeopleviewJobsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SimilarAndPeopleviewJobsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
