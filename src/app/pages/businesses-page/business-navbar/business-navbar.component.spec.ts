import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessNavbarComponent } from './business-navbar.component';

describe('BusinessNavbarComponent', () => {
  let component: BusinessNavbarComponent;
  let fixture: ComponentFixture<BusinessNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
