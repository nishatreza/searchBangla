import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessComponent } from './update-business.component';

describe('UpdateBusinessComponent', () => {
  let component: UpdateBusinessComponent;
  let fixture: ComponentFixture<UpdateBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
