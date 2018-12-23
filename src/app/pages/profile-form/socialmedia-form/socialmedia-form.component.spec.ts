import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialmediaFormComponent } from './socialmedia-form.component';

describe('SocialmediaFormComponent', () => {
  let component: SocialmediaFormComponent;
  let fixture: ComponentFixture<SocialmediaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SocialmediaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialmediaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
