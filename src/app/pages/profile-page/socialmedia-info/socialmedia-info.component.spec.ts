import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaInfoComponent } from './socialmedia-info.component';

describe('SocialmediaInfoComponent', () => {
  let component: SocialmediaInfoComponent;
  let fixture: ComponentFixture<SocialmediaInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmediaInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
