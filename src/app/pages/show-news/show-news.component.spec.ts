import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNewsComponent } from './show-news.component';

describe('ShowNewsComponent', () => {
  let component: ShowNewsComponent;
  let fixture: ComponentFixture<ShowNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
