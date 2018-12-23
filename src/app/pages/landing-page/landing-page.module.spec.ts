import { LandingPageModule } from './landing-page.module';

describe('LandingPageModule', () => {
  let landingPageModule: LandingPageModule;

  beforeEach(() => {
    landingPageModule = new LandingPageModule();
  });

  it('should create an instance', () => {
    expect(landingPageModule).toBeTruthy();
  });
});
