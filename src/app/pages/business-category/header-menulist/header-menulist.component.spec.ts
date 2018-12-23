import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderMenulistComponent } from './header-menulist.component';

describe('HeaderMenulistComponent', () => {
  let component: HeaderMenulistComponent;
  let fixture: ComponentFixture<HeaderMenulistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderMenulistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderMenulistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
