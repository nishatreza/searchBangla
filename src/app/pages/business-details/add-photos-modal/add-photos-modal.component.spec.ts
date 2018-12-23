import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPhotosModalComponent } from './add-photos-modal.component';

describe('AddPhotosModalComponent', () => {
  let component: AddPhotosModalComponent;
  let fixture: ComponentFixture<AddPhotosModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPhotosModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPhotosModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
