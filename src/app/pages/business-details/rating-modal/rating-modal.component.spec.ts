import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingModalComponent } from './rating-modal.component';

describe('RatingModalComponent', () => {
  let component: RatingModalComponent;
  let fixture: ComponentFixture<RatingModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RatingModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
