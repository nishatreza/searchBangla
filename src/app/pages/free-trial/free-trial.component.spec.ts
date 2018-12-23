import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialComponent } from './free-trial.component';

describe('FreeTrialComponent', () => {
  let component: FreeTrialComponent;
  let fixture: ComponentFixture<FreeTrialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
