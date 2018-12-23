import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignInMiddleComponent } from './sign-in-middle.component';

describe('SignInMiddleComponent', () => {
  let component: SignInMiddleComponent;
  let fixture: ComponentFixture<SignInMiddleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignInMiddleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignInMiddleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
