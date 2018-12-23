import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeTrialHeaderComponent } from './free-trial-header.component';

describe('FreeTrialHeaderComponent', () => {
  let component: FreeTrialHeaderComponent;
  let fixture: ComponentFixture<FreeTrialHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FreeTrialHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeTrialHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
