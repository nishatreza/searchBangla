import { BusinessDetailsModule } from './business-details.module';

describe('BusinessDetailsModule', () => {
  let businessDetailsModule: BusinessDetailsModule;

  beforeEach(() => {
    businessDetailsModule = new BusinessDetailsModule();
  });

  it('should create an instance', () => {
    expect(businessDetailsModule).toBeTruthy();
  });
});
