import { ProfileSubscriptionModule } from './profile-subscription.module';

describe('ProfileSubscriptionModule', () => {
  let profileSubscriptionModule: ProfileSubscriptionModule;

  beforeEach(() => {
    profileSubscriptionModule = new ProfileSubscriptionModule();
  });

  it('should create an instance', () => {
    expect(profileSubscriptionModule).toBeTruthy();
  });
});
