import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessListComponent } from './business-list.component';

describe('BusinessListComponent', () => {
  let component: BusinessListComponent;
  let fixture: ComponentFixture<BusinessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
