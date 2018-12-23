import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestFormComponent } from './interest-form.component';

describe('InterestFormComponent', () => {
  let component: InterestFormComponent;
  let fixture: ComponentFixture<InterestFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterestFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
