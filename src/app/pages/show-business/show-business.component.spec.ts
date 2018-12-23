import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBusinessComponent } from './show-business.component';

describe('ShowBusinessComponent', () => {
  let component: ShowBusinessComponent;
  let fixture: ComponentFixture<ShowBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
