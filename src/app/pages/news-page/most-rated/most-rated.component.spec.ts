import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostRatedComponent } from './most-rated.component';

describe('MostRatedComponent', () => {
  let component: MostRatedComponent;
  let fixture: ComponentFixture<MostRatedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostRatedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostRatedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
