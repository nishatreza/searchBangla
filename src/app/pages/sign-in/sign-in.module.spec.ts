import { SignInModule } from './sign-in.module';

describe('SignInModule', () => {
  let signInModule: SignInModule;

  beforeEach(() => {
    signInModule = new SignInModule();
  });

  it('should create an instance', () => {
    expect(signInModule).toBeTruthy();
  });
});
