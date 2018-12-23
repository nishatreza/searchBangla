import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceItemsComponent } from './service-items.component';

describe('ServiceItemsComponent', () => {
  let component: ServiceItemsComponent;
  let fixture: ComponentFixture<ServiceItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
