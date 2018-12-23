import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewDetailsComponent } from './review-details.component';

describe('ReviewDetailsComponent', () => {
  let component: ReviewDetailsComponent;
  let fixture: ComponentFixture<ReviewDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
