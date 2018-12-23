import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanCardComponent } from './plan-card.component';

describe('PlanCardComponent', () => {
  let component: PlanCardComponent;
  let fixture: ComponentFixture<PlanCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
