import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessReviewFormComponent } from './business-review-form.component';

describe('BusinessReviewFormComponent', () => {
  let component: BusinessReviewFormComponent;
  let fixture: ComponentFixture<BusinessReviewFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessReviewFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessReviewFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
