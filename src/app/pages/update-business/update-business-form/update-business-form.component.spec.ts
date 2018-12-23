import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateBusinessFormComponent } from './update-business-form.component';

describe('UpdateBusinessFormComponent', () => {
  let component: UpdateBusinessFormComponent;
  let fixture: ComponentFixture<UpdateBusinessFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateBusinessFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateBusinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
