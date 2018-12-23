import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCategoryComponent } from './business-category.component';

describe('BusinessCategoryComponent', () => {
  let component: BusinessCategoryComponent;
  let fixture: ComponentFixture<BusinessCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
