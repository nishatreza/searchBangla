import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRestaurantMenuComponent } from './view-restaurant-menu.component';

describe('ViewRestaurantMenuComponent', () => {
  let component: ViewRestaurantMenuComponent;
  let fixture: ComponentFixture<ViewRestaurantMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewRestaurantMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewRestaurantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
