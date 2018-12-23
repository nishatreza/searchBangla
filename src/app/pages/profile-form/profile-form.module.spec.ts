import { ProfileFormModule } from './profile-form.module';

describe('ProfileFormModule', () => {
  let profileFormModule: ProfileFormModule;

  beforeEach(() => {
    profileFormModule = new ProfileFormModule();
  });

  it('should create an instance', () => {
    expect(profileFormModule).toBeTruthy();
  });
});
