import { BusinessesPageModule } from './businesses-page.module';

describe('BusinessesPageModule', () => {
  let businessesPageModule: BusinessesPageModule;

  beforeEach(() => {
    businessesPageModule = new BusinessesPageModule();
  });

  it('should create an instance', () => {
    expect(businessesPageModule).toBeTruthy();
  });
});
