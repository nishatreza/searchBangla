import { ProfilePageModule } from './profile-page.module';

describe('ProfilePageModule', () => {
  let profilePageModule: ProfilePageModule;

  beforeEach(() => {
    profilePageModule = new ProfilePageModule();
  });

  it('should create an instance', () => {
    expect(profilePageModule).toBeTruthy();
  });
});
