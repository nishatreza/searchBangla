import { BusinessCategoryMenuModule } from './business-category-menu.module';

describe('BusinessCategoryMenuModule', () => {
  let businessCategoryMenuModule: BusinessCategoryMenuModule;

  beforeEach(() => {
    businessCategoryMenuModule = new BusinessCategoryMenuModule();
  });

  it('should create an instance', () => {
    expect(businessCategoryMenuModule).toBeTruthy();
  });
});
