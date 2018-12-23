import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateNewsComponent } from './update-news.component';

describe('UpdateNewsComponent', () => {
  let component: UpdateNewsComponent;
  let fixture: ComponentFixture<UpdateNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
