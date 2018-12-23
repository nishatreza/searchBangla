import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopSearchBarComponent } from './top-search-bar.component';

describe('TopSearchBarComponent', () => {
  let component: TopSearchBarComponent;
  let fixture: ComponentFixture<TopSearchBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopSearchBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopSearchBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
