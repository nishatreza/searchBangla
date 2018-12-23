import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewsNavbarComponent } from './add-news-navbar.component';

describe('AddNewsNavbarComponent', () => {
  let component: AddNewsNavbarComponent;
  let fixture: ComponentFixture<AddNewsNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewsNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewsNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
