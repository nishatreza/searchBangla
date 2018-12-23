import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessesPageComponent } from './businesses-page.component';

describe('BusinessesPageComponent', () => {
  let component: BusinessesPageComponent;
  let fixture: ComponentFixture<BusinessesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
