import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsHeaderComponent } from './business-details-header.component';

describe('BusinessDeatailsHeaderComponent', () => {
  let component: BusinessDetailsHeaderComponent;
  let fixture: ComponentFixture<BusinessDetailsHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDetailsHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDetailsHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
