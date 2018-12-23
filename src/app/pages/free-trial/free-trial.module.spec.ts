import { FreeTrialModule } from './free-trial.module';

describe('FreeTrialModule', () => {
  let freeTrialModule: FreeTrialModule;

  beforeEach(() => {
    freeTrialModule = new FreeTrialModule();
  });

  it('should create an instance', () => {
    expect(freeTrialModule).toBeTruthy();
  });
});
