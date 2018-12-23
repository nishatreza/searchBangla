import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuRightSideComponent } from './menu-right-side.component';

describe('MenuRightSideComponent', () => {
  let component: MenuRightSideComponent;
  let fixture: ComponentFixture<MenuRightSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuRightSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuRightSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
