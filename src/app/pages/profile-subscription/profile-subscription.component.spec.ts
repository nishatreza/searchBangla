import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileSubscriptionComponent } from './profile-subscription.component';

describe('ProfileSubscriptionComponent', () => {
  let component: ProfileSubscriptionComponent;
  let fixture: ComponentFixture<ProfileSubscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileSubscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileSubscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
