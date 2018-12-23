import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsFormComponent } from './update-news-form.component';

describe('UpdateNewsFormComponent', () => {
  let component: UpdateNewsFormComponent;
  let fixture: ComponentFixture<UpdateNewsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNewsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
