import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileBlogComponent } from './profile-blog.component';

describe('ProfileBlogComponent', () => {
  let component: ProfileBlogComponent;
  let fixture: ComponentFixture<ProfileBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
