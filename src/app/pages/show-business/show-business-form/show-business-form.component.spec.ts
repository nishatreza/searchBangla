import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowBusinessFormComponent } from './show-business-form.component';

describe('ShowBusinessFormComponent', () => {
  let component: ShowBusinessFormComponent;
  let fixture: ComponentFixture<ShowBusinessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowBusinessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowBusinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
