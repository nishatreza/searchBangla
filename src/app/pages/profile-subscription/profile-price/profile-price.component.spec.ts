import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfilePriceComponent } from './profile-price.component';

describe('ProfilePriceComponent', () => {
  let component: ProfilePriceComponent;
  let fixture: ComponentFixture<ProfilePriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfilePriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfilePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
