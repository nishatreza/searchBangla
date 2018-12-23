import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessAdvertisementComponent } from './business-advertisement.component';

describe('BusinessAdvertisementComponent', () => {
  let component: BusinessAdvertisementComponent;
  let fixture: ComponentFixture<BusinessAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
