import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowJobsFormComponent } from './show-jobs-form.component';

describe('ShowJobsFormComponent', () => {
  let component: ShowJobsFormComponent;
  let fixture: ComponentFixture<ShowJobsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowJobsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowJobsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
