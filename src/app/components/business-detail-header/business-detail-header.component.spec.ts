import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailHeaderComponent } from './business-detail-header.component';

describe('BusinessDetailHeaderComponent', () => {
  let component: BusinessDetailHeaderComponent;
  let fixture: ComponentFixture<BusinessDetailHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDetailHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDetailHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
