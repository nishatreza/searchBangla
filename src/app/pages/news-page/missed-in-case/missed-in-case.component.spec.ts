import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissedInCaseComponent } from './missed-in-case.component';

describe('MissedInCaseComponent', () => {
  let component: MissedInCaseComponent;
  let fixture: ComponentFixture<MissedInCaseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MissedInCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissedInCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
