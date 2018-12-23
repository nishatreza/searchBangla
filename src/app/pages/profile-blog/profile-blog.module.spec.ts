import { ProfileBlogModule } from './profile-blog.module';

describe('ProfileBlogModule', () => {
  let profileBlogModule: ProfileBlogModule;

  beforeEach(() => {
    profileBlogModule = new ProfileBlogModule();
  });

  it('should create an instance', () => {
    expect(profileBlogModule).toBeTruthy();
  });
});
