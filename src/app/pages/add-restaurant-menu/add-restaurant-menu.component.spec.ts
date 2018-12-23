import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddRestaurantMenuComponent } from './add-restaurant-menu.component';

describe('AddRestaurantMenuComponent', () => {
  let component: AddRestaurantMenuComponent;
  let fixture: ComponentFixture<AddRestaurantMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddRestaurantMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddRestaurantMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
