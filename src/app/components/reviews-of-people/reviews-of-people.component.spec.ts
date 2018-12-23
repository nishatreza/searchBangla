import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewsOfPeopleComponent } from './reviews-of-people.component';

describe('ReviewsOfPeopleComponent', () => {
  let component: ReviewsOfPeopleComponent;
  let fixture: ComponentFixture<ReviewsOfPeopleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewsOfPeopleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewsOfPeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
