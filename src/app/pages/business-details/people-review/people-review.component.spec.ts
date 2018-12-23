import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleReviewComponent } from './people-review.component';

describe('PeopleReviewComponent', () => {
  let component: PeopleReviewComponent;
  let fixture: ComponentFixture<PeopleReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeopleReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
