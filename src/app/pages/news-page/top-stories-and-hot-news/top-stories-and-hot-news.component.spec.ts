import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStoriesAndHotNewsComponent } from './top-stories-and-hot-news.component';

describe('TopStoriesAndHotNewsComponent', () => {
  let component: TopStoriesAndHotNewsComponent;
  let fixture: ComponentFixture<TopStoriesAndHotNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopStoriesAndHotNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStoriesAndHotNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
