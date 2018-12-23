import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessListMapComponent } from './business-list-map.component';

describe('BusinessListMapComponent', () => {
  let component: BusinessListMapComponent;
  let fixture: ComponentFixture<BusinessListMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessListMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessListMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
