import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogMainBodyComponent } from './blog-main-body.component';

describe('BlogMainBodyComponent', () => {
  let component: BlogMainBodyComponent;
  let fixture: ComponentFixture<BlogMainBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogMainBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
