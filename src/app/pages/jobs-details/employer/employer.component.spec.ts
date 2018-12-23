import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerComponent } from './employer.component';

describe('EmployerComponent', () => {
  let component: EmployerComponent;
  let fixture: ComponentFixture<EmployerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
