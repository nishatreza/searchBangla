import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantMenuFormComponent } from './restaurant-menu-form.component';

describe('RestaurantMenuFormComponent', () => {
  let component: RestaurantMenuFormComponent;
  let fixture: ComponentFixture<RestaurantMenuFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RestaurantMenuFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RestaurantMenuFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
