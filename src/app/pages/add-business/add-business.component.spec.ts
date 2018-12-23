import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessComponent } from './add-business.component';

describe('AddBusinessComponent', () => {
  let component: AddBusinessComponent;
  let fixture: ComponentFixture<AddBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
