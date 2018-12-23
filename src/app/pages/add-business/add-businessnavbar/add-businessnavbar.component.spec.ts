import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBusinessnavbarComponent } from './add-businessnavbar.component';

describe('AddBusinessnavbarComponent', () => {
  let component: AddBusinessnavbarComponent;
  let fixture: ComponentFixture<AddBusinessnavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBusinessnavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBusinessnavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
