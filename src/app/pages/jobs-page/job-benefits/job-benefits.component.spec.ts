import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobBenefitsComponent } from './job-benefits.component';

describe('JobBenefitsComponent', () => {
  let component: JobBenefitsComponent;
  let fixture: ComponentFixture<JobBenefitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobBenefitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobBenefitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
