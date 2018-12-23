import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsFormComponent } from './add-news-form.component';

describe('AddNewsFormComponent', () => {
  let component: AddNewsFormComponent;
  let fixture: ComponentFixture<AddNewsFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
