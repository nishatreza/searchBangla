import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BestBusinessComponent } from './best-business.component';

describe('BestBusinessComponent', () => {
  let component: BestBusinessComponent;
  let fixture: ComponentFixture<BestBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BestBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BestBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
