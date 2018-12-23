import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessNavbarComponent } from './update-business-navbar.component';

describe('UpdateBusinessNavbarComponent', () => {
  let component: UpdateBusinessNavbarComponent;
  let fixture: ComponentFixture<UpdateBusinessNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBusinessNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusinessNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
