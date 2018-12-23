import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessReviewComponent } from './business-review.component';

describe('BusinessReviewComponent', () => {
  let component: BusinessReviewComponent;
  let fixture: ComponentFixture<BusinessReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
