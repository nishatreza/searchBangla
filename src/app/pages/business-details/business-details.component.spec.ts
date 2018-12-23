import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsComponent } from './business-details.component';

describe('BusinessDetailsComponent', () => {
  let component: BusinessDetailsComponent;
  let fixture: ComponentFixture<BusinessDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
