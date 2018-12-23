import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApptronFeaturesComponent } from './apptron-features.component';

describe('ApptronFeaturesComponent', () => {
  let component: ApptronFeaturesComponent;
  let fixture: ComponentFixture<ApptronFeaturesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApptronFeaturesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApptronFeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
