import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotAndNewBusinessComponent } from './hot-and-new-business.component';

describe('HotAndNewBusinessComponent', () => {
  let component: HotAndNewBusinessComponent;
  let fixture: ComponentFixture<HotAndNewBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotAndNewBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotAndNewBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
