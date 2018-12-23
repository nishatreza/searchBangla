import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCategoryMenuComponent } from './business-category-menu.component';

describe('BusinessCategoryMenuComponent', () => {
  let component: BusinessCategoryMenuComponent;
  let fixture: ComponentFixture<BusinessCategoryMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCategoryMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
