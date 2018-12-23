import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerFeaturesComponent } from './career-features.component';

describe('CareerFeaturesComponent', () => {
  let component: CareerFeaturesComponent;
  let fixture: ComponentFixture<CareerFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CareerFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CareerFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
