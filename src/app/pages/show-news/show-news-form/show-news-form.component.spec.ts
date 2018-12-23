import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewsFormComponent } from './show-news-form.component';

describe('ShowNewsFormComponent', () => {
  let component: ShowNewsFormComponent;
  let fixture: ComponentFixture<ShowNewsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNewsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
