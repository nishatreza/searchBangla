import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardsComponent } from './blog-cards.component';

describe('BlogCardsComponent', () => {
  let component: BlogCardsComponent;
  let fixture: ComponentFixture<BlogCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
