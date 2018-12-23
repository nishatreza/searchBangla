import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscriptionMainBodyComponent } from './subscription-main-body.component';

describe('SubscriptionMainBodyComponent', () => {
  let component: SubscriptionMainBodyComponent;
  let fixture: ComponentFixture<SubscriptionMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubscriptionMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubscriptionMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
