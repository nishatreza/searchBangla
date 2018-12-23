import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StarReviewComponent } from './star-review.component';

describe('StarReviewComponent', () => {
  let component: StarReviewComponent;
  let fixture: ComponentFixture<StarReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StarReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
