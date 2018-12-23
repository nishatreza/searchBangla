import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainBodyComponent } from './main-body.component';

describe('MainBodyComponent', () => {
  let component: MainBodyComponent;
  let fixture: ComponentFixture<MainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
