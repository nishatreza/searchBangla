import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobsCareerCardsComponent } from './jobs-career-cards.component';

describe('JobsCareerCardsComponent', () => {
  let component: JobsCareerCardsComponent;
  let fixture: ComponentFixture<JobsCareerCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobsCareerCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobsCareerCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
